<?php

namespace App\Http\Controllers;

use App\Mail\UserReadingEmail;
use App\Services\CalculateNumerology;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Mail;

class DateController extends Controller {
    public function create(Request $request) {

        $date = $request->value;
        $user = $request->user();

        $calculateNumerology = new CalculateNumerology();
        $userDetails = $calculateNumerology->breakDate($date);

        $request->user()->credits -= 1;
        $request->user()->save();
        $creditsRemaining = $request->user()->credits;

        // Convert ISO 8601 date string to a DateTime object
        $dateObject = new \DateTime($date);
        // Format the date as MM/DD/YYYY
        $formattedDate = $dateObject->format('m/d/Y');

        Mail::to($user->email)->send(new UserReadingEmail($user, $userDetails, $formattedDate, $creditsRemaining));


        return Inertia::render('Reading', [
            'userDetails' => $userDetails,
        ]);
    }
}
