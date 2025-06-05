<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RepairController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Redirect::to('/dashboard');

    //    return Inertia::render('Welcome', [
    //        'canLogin' => Route::has('login'),
    //        'canRegister' => Route::has('register'),
    //        'laravelVersion' => Application::VERSION,
    //        'phpVersion' => PHP_VERSION,
    //    ]);
});

Route::get('/dashboard', function () {
    return Redirect::to('/repairs');
    //    return Inertia::render('Dashboard/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/repairs', [RepairController::class, 'index'])->name('repairs.index');
    Route::post('/repairs', [RepairController::class, 'store'])->name('repairs.store');
    Route::get('/repairs/counter', [RepairController::class, 'counterFilters'])->name('repairs.counterFilters');
    Route::patch('/repairs/{repair}', [RepairController::class, 'update'])->name('repairs.update');
    Route::delete('/repairs/{repair}', [RepairController::class, 'delete'])->name('repairs.delete');
    Route::patch('/repairs/{repair}/ordered', [RepairController::class, 'updateOrdered'])->name('repairs.update.ordered');
    Route::patch('/repairs/{repair}/fixed', [RepairController::class, 'updateFixed'])->name('repairs.update.fixed');
    Route::patch('/repairs/{repair}/called', [RepairController::class, 'updateCalled'])->name('repairs.update.called');
    Route::patch('/repairs/{repair}/diagnostic', [RepairController::class, 'updateDiagnostic'])->name('repairs.update.diagnostic');
    Route::patch('/repairs/{repair}/picked', [RepairController::class, 'updatePickedUp'])->name('repairs.update.picked');
});

Route::middleware('auth')->group(function () {
    Route::get('/users', [\App\Http\Controllers\UserController::class, 'index'])->name('employees.index');
    Route::get('/users/{user}', [\App\Http\Controllers\UserController::class, 'show'])->name('employees.show');
    Route::patch('/users/{user}', [\App\Http\Controllers\UserController::class, 'update'])->name('employees.update');
});

require __DIR__.'/auth.php';
