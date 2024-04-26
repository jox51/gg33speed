<?php

namespace App\Services;

use App\Mail\UserReadingEmail;
use Illuminate\Support\Facades\Mail;
use DateTime;

class ReadingService {
  protected $calculateNumerology;

  public function __construct(CalculateNumerology $calculateNumerology) {
    $this->calculateNumerology = $calculateNumerology;
  }

  public function processReading($user, $date) {
    $userDetails = $this->calculateNumerology->breakDate($date);
    $creditsRemaining = $user->credits;

    // Check if user is admin
    if ($user->is_admin) {
      $formattedDate = $this->formatDate($date);
      Mail::to($user->email)->send(new UserReadingEmail($user, $userDetails, $formattedDate, $creditsRemaining = 10));
    } else {
      $user->decrement('credits');
      $formattedDate = $this->formatDate($date);
      Mail::to($user->email)->send(new UserReadingEmail($user, $userDetails, $formattedDate, $creditsRemaining));
    }

    return $userDetails;
  }

  protected function formatDate($date) {
    $dateObject = new DateTime($date);
    return $dateObject->format('m/d/Y');
  }
}
