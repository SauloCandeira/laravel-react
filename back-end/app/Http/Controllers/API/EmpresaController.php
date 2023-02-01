<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use App\Models\Empresa;
use Illuminate\Http\Request;

class EmpresaController extends Controller
{
    public function searchClientes()
    {
        $empresa = Empresa::all();
        return $empresa;
    }

}
