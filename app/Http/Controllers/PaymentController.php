<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\PayPalService;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\User;


class PaymentController extends Controller {
    public function create() {

        $paypalService = new PayPalService();

        $response = $paypalService->handlePayment();


        return Inertia::location($response);
    }

    public function cancel() {
        return Inertia::render('Welcome');
    }

    public function approval() {

        $paypalService = new PayPalService();

        $response = $paypalService->handleApproval();



        if ($response['status'] === 'success') {
            $user = Auth::user();
            // Increment user credits on successful payment
            $user->increment('credits');
            // Optionally, you could also set a specific number of credits per payment
            // $user->credits += $creditsPerPurchase;
            // $user->save();

            return Inertia::render('Reading', [
                'payment' => $response,
            ]);
        }



        return to_route('cancel');
    }
}
