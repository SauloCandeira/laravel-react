<?php

use App\Http\Controllers\API\OsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/os', [OsController::class, 'store']);
Route::put('/os/{id}', [OsController::class, 'update']);
Route::get('/os', [OsController::class, 'search']);
Route::get('/os/{id}', [OsController::class, 'search']);
Route::delete('/os/{id}', [OsController::class, 'search']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
