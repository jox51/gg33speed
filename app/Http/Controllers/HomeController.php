<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller {
    public function create() {
        return Inertia::render('HomeTwo');
    }
}
