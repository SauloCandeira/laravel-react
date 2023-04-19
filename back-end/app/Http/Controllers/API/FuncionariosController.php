<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Funcionarios;

class FuncionariosController extends Controller
{
    public function searchFuncionarios()
    {
        $funcionarios = Funcionarios::all();
        return $funcionarios;
    }
}
