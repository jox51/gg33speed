<?php

namespace App\Services;

use App\Traits\ConsumesExternalServices;
use Inertia\Inertia;

class PayPalService {

  use ConsumesExternalServices;

  protected $baseUri;
  protected $clientId;
  protected $clientSecret;

  public function __construct() {
    $this->baseUri = config('services.paypal.base_uri');
    $this->clientId = config('services.paypal.client_id');
    $this->clientSecret = config('services.paypal.client_secret');
  }

  public function resolveAuthorization(&$queryParams, &$formParams, &$headers) {
    $headers['Authorization'] = $this->resolveAccessToken();
  }
  public function resolveAccessToken() {
    $credentials = base64_encode("{$this->clientId}:{$this->clientSecret}");

    return "Basic {$credentials}";
  }

  public function decodeResponse($response) {
    return json_decode($response);
  }

  public function handlePayment() {

    $order = $this->createOrder(28, 'USD');

    $orderLinks = collect($order->links);

    $approve = $orderLinks->where('rel', 'approve')->first();

    session()->put('approvalId', $order->id);

    return $approve->href;
  }

  public function handleApproval() {

    if (session()->has('approvalId')) {
      $approvalId = session()->get('approvalId');

      $payment = $this->capturePayment($approvalId);

      $name = $payment->payer->name->given_name;
      $payment = $payment->purchase_units[0]->payments->captures[0]->amount;
      $amount = $payment->value;
      $currency = $payment->currency_code;

      // return redirect()->route('reading')->withSuccess(['payment' => "Thanks, {$name}. We received your {$amount}{$currency} payment."]);

      return [
        'payment' => "Thanks, {$name}. We received your {$amount} {$currency} payment.",
        'status' => 'success'
      ];
    }

    return redirect()->route('cancel')->withErrors('We cannot capture the payment. Try again, please');
  }

  public function createOrder($value, $currency) {

    return $this->makeRequest(
      'POST',
      '/v2/checkout/orders',
      [],
      [
        'intent' => 'CAPTURE',
        'purchase_units' => [
          0 => [
            'amount' => [
              'currency_code' => strtoupper($currency),
              'value' => $value
            ]
          ]
        ],
        'application_context' => [
          'brand_name' => config('app.name'),
          'shipping_preference' => 'NO_SHIPPING',
          'user_action' => 'PAY_NOW',
          'return_url' => route('approval'),
          'cancel_url' => route('cancel')
        ]
      ],
      [],
      $isJsonRequest = true
    );
  }

  public function capturePayment($approvalId) {
    return $this->makeRequest(
      'POST',
      "/v2/checkout/orders/{$approvalId}/capture",
      [],
      [],
      [
        'Content-Type' => 'application/json',
      ]
    );
  }
}
