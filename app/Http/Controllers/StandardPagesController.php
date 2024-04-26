<?php

namespace App\Http\Controllers;


use Inertia\Inertia;


class StandardPagesController extends Controller {

  public function  terms() {
    return Inertia::render('Terms');
  }

  public function privacy() {
    return Inertia::render('PrivacyPolicy');
  }

  public function contact() {
    return Inertia::render('ContactUs');
  }
  public function about() {
    return Inertia::render('AboutUs');
  }
}
