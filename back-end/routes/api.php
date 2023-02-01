<?php

use App\Http\Controllers\API\OsController;
use App\Http\Controllers\API\EmpresaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Ordem de serviço
Route::post('/os', [OsController::class, 'store']);
Route::put('/os/{id}', [OsController::class, 'update']);
Route::get('/os', [OsController::class, 'search']);
Route::get('/os/{id}', [OsController::class, 'search']);
Route::delete('/os/{id}', [OsController::class, 'search']);
Route::get('/os-status', [OsController::class, 'searchStatus']);

// Funcionarios
Route::get('/Osfuncionarios', [OsController::class, 'searchOsFuncionarios']);
Route::get('/funcionarios', [OsController::class, 'searchFuncionarios']);

// Clientes
Route::get('/clientes', [EmpresaController::class, 'searchClientes']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
