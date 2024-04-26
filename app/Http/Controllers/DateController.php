<?php

namespace App\Http\Controllers;

use App\Mail\UserReadingEmail;
use App\Services\CalculateNumerology;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Services\ReadingService;
use Illuminate\Support\Facades\Mail;

class DateController extends Controller {
    protected $readingService;

    public function __construct(ReadingService $readingService) {
        $this->readingService = $readingService;
    }

    public function create(Request $request) {
        $date = $request->value;
        $user = $request->user();

        $userDetails = $this->readingService->processReading($user, $date);

        return Inertia::render('Reading', [
            'userDetails' => $userDetails,
        ]);
    }
}
