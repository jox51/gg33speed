<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ReadingController extends Controller {
    public function create() {

        return Inertia::render('Reading');
    }
}
