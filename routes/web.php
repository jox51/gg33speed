<?php

use App\Http\Controllers\DateController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReadingController;
use App\Http\Controllers\StandardPagesController;
use App\Http\Middleware\CheckPaidStatus;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::get('/hometwo', [HomeController::class, 'create'])->name('hometwo');
Route::get('/pay', [PaymentController::class, 'create'])->name('payment');
Route::get('/approval', [PaymentController::class, 'approval'])->name('approval');
Route::get('/', [PaymentController::class, 'cancel'])->name('cancel');

Route::get('/terms', [StandardPagesController::class, 'terms'])->name('terms');
Route::get('/privacy', [StandardPagesController::class, 'privacy'])->name('privacy');
Route::get('/contact', [StandardPagesController::class, 'contact'])->name('contact');
Route::get('/about', [StandardPagesController::class, 'about'])->name('about');
Route::get('/refund', [StandardPagesController::class, 'refund'])->name('refund');


Route::middleware(CheckPaidStatus::class)->group(function () {
    Route::get('/reading', [ReadingController::class, 'create'])->name('reading');
    Route::post('/date', [DateController::class, 'create'])->name('create');
    Route::get('/date', [ReadingController::class, 'create'])->name('reading');
});


require __DIR__ . '/auth.php';
