<?php

use App\Http\Controllers\API\OsController;
use App\Http\Controllers\API\EmpresaController;
use App\Http\Controllers\API\TipoController;
use App\Http\Controllers\API\FuncionariosController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


// Ordem de serviço
Route::post('/os', [OsController::class, 'store']);
Route::put('/os/{id}', [OsController::class, 'update']);
Route::get('/os', [OsController::class, 'search']);
Route::get('/os/{id}', [OsController::class, 'searchId']);
// Route::delete('/os/{id}', [OsController::class, 'search']);
Route::get('/os-status', [OsController::class, 'searchStatus']);

// Funcionarios
Route::get('/Osfuncionarios', [OsController::class, 'searchOsFuncionarios']);
Route::get('/funcionarios', [FuncionariosController::class, 'searchFuncionarios']);

// Clientes
Route::get('/clientes', [EmpresaController::class, 'searchClientes']);

// Tipos
Route::get('/tipos', [TipoController::class, 'searchTipos']);

// Arquivar
Route::post('/arquivar/{id}', [OsController::class, 'arquivar']);



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
