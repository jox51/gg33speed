<?php

namespace App\Services;

use App\Http\Utils\CalculationUtils;
use App\Http\Utils\ZodiacUtils;
use App\Models\Numerology;
use OpenAI;

class CalculateNumerology {

  public function breakDate($date) {

    $dateBirthdayParts = explode('-', $date);
    list($birthYear, $birthMonth, $birthDay) = $dateBirthdayParts;

    $userDetails = $this->calculateLifePathNumber($birthYear, $birthMonth, $birthDay);

    $reading = $this->rewriteUserStats($userDetails['lifepathHighlights'], $userDetails['borndayHighlights'], $userDetails['zodiacHighlights']);

    $lifepath = $userDetails['lifepath'];
    $bornday = $userDetails['bornday'];
    $zodiac = $userDetails['zodiac'];

    return ['reading' => $reading, 'lifepath' => $lifepath, 'bornday' => $bornday, 'zodiac' => $zodiac, 'lifepathEmoji' => $userDetails['lifepathEmoji'], 'borndayEmoji' => $userDetails['borndayEmoji'], 'zodiacEmoji' => $userDetails['zodiacEmoji']];
  }

  public function calculateLifePathNumber($birthYear, $birthMonth, $birthDay) {
    $birthYear = strval($birthYear); // Convert year to string
    $birthMonth = sprintf('%02d', $birthMonth); // Convert month to string and pad with zero if necessary
    $birthDay = sprintf('%02d', $birthDay); //

    $birthdayCalcs = CalculationUtils::birthdaySumCalculators($birthMonth, $birthDay, $birthYear);
    // double date
    $rawLifepath = $birthdayCalcs['sumMonth'] + $birthdayCalcs['sumDay'] + $birthdayCalcs['sumYear'];

    $resLP = CalculationUtils::calculateTotal($rawLifepath);
    $resBday = CalculationUtils::calculateTotal($birthdayCalcs['sumDay']);

    $zodiac = ZodiacUtils::getJustChinZodiac($birthYear, $birthMonth, $birthDay);

    $numerologyStats = Numerology::all()->toArray();

    $numerologyDetails = json_decode($numerologyStats[0]['numerology'], true);
    $astrologyDetails = json_decode($numerologyStats[0]['astrology'], true);

    // Get highlights for both life path and birthday numbers
    $lpHighlights = $this->findNumerologyHighlights($resLP, $numerologyDetails);
    $bdayHighlights = $this->findNumerologyHighlights($resBday, $numerologyDetails);
    $zodiacDetails = $this->findZodiacDetails($zodiac, $astrologyDetails);


    // Extract random entries from each highlights array
    $randomLPHighlights = $this->getRandomEntries($lpHighlights['entries']);
    $randomBdayHighlights = $this->getRandomEntries($bdayHighlights['entries']);
    $randomZodiacHighlights = $this->getRandomEntries($zodiacDetails);

    $adjustedBdayHighlights = $this->adjustHighlightSentences($randomBdayHighlights);

    return ['lifepathHighlights' => $randomLPHighlights, 'borndayHighlights' => $adjustedBdayHighlights, 'zodiacHighlights' => $randomZodiacHighlights,  'lifepath' => $resLP, 'bornday' => $resBday, 'zodiac' => $zodiac, 'lifepathEmoji' =>  $randomLPHighlights[0]['emoji'], 'borndayEmoji' => $adjustedBdayHighlights[0]['emoji'], 'zodiacEmoji' => $randomZodiacHighlights[0]['emoji']];
  }

  public function findNumerologyHighlights($number, $numerologyDetails) {
    // Define a mapping for number to life path key in your details array
    $lifePathKeyMap = [
      1 => 'oneLifepath',
      2 => 'twoLifepath',
      3 => 'threeLifepath',
      4 => 'fourLifepath',
      5 => 'fiveLifepath',
      6 => 'sixLifepath',
      7 => 'sevenLifepath',
      8 => 'eightLifepath',
      9 => 'nineLifepath',
      11 => 'elevenLifepath',
      22 => 'twentyTwoLifepath',
      28 => 'twentyEightLifepath',
      33 => 'thirtyThreeLifepath',
    ];

    // Check if the number is in the map
    if (array_key_exists($number, $lifePathKeyMap)) {
      $lifePathKey = $lifePathKeyMap[$number];
      if (isset($numerologyDetails[$lifePathKey]['Quick Highlights'])) {
        return $numerologyDetails[$lifePathKey]['Quick Highlights'];
      }
    }

    return null; // Return null if no matching life path or highlights are found
  }

  public function findZodiacDetails($zodiacSign, $astrologyDetails) {
    foreach ($astrologyDetails as $detail) {
      if (isset($detail['ChineseZodiacSign']) && $detail['ChineseZodiacSign'] === $zodiacSign) {
        return $detail['Highlights']['entries'];
      }
    }
    return null; // Return null if no matching zodiac sign is found
  }

  public function getRandomEntries($entriesArray, $count = 4) {
    if (count($entriesArray) >= $count) {
      $keys = array_rand($entriesArray, $count); // Get $count random keys
      return [$entriesArray[$keys[0]], $entriesArray[$keys[1]]]; // Return two random entries
    }
    return $entriesArray; // Return all entries if less than $count
  }

  public function adjustHighlightSentences($highlights) {
    foreach ($highlights as $key => $highlight) {
      // Check if 'Lifepath' or 'lifepath' is in the text and replace it
      $highlights[$key]['text'] = preg_replace(
        '/\b(Lifepath|lifepath|life path)\b/',  // Regular expression to find 'Lifepath' or 'lifepath'
        'bornday',                    // Replacement text
        $highlight['text']            // Original text
      );
      $highlights[$key]['text'] = preg_replace(
        '/\b(lifepaths)\b/',
        'energy',
        $highlight['text']
      );
    }
    return $highlights;
  }

  public function rewriteUserStats($lifepathHighlights, $borndayHighlights, $zodiacHighlights) {
    $api_key = getenv('OPENAI_API_KEY');
    $client = OpenAI::client($api_key);


    // $lifepathContent = "{$lifepathHighlights[0]['text']} {$lifepathHighlights[1]['text']}";
    // $borndayContent = "{$borndayHighlights[0]['text']} {$borndayHighlights[1]['text']}";
    // $zodiacContent = "{$zodiacHighlights[0]['text']} {$zodiacHighlights[1]['text']}";

    $prompt = $this->preparePromptForCompletions($lifepathHighlights, $borndayHighlights, $zodiacHighlights);


    $response = $client->chat()->create([
      'model' => 'gpt-4',
      'temperature' => 0.1,
      'messages' => [
        ['role' => 'system', 'content' => 'You are an excellent rewriter and well versed in numerlogy and astrology.'],
        ['role' => 'user', 'content' => $prompt],
      ],
    ]);

    $message = json_decode($response->choices[0]->message->content, true);

    return $message;
  }

  public function preparePromptForCompletions($lifepathHighlights, $borndayHighlights, $zodiacHighlights) {
    // Aggregate the sentences
    $lifepathSentence = implode(' ', array_column($lifepathHighlights, 'text'));
    $borndaySentence = implode(' ', array_column($borndayHighlights, 'text'));
    $zodiacSentence = implode(' ', array_column($zodiacHighlights, 'text'));

    // Construct the prompt
    $prompt = "As an expert in numerology and astrology specific to the style of GG33, please rewrite the following sentences in a friendly and conversational tone without changing their meaning. Structure the sentences to be as if you are speaking to them. If there are any sentences related to a particular gender, rewrite the sentence to remain gender agnostic. Return as JSON:\n\n";
    $prompt .= "Lifepath: $lifepathSentence\n";
    $prompt .= "Bornday: $borndaySentence\n";
    $prompt .= "ChineseZodiac: $zodiacSentence\n";

    return $prompt;
  }
}
