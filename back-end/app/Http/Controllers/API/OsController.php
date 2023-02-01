<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Os;
use App\Models\OsFuncionario;
use App\Models\Funcionario;
use App\Models\OsStatus;
class OsController extends Controller
{

    public function search()
    {
        $os = Os::with('condominio', 'status', 'tipo', 'osfuncionario', 'funcionario')->get();

        return $os;
    }


    public function searchStatus()
    {
        $lista = OsStatus::with('listaDeOs', 'listaDeOs.condominio', 'listaDeOs.status', 'listaDeOs.tipo', 'listaDeOs.osfuncionario', 'listaDeOs.funcionario', 'listaDeOs.listaFuncionarios')->get();

        return $lista;
    }

    public function searchOsFuncionarios()
    {
        $lista = OsFuncionario::with('listaFuncionarios')->get();

        return $lista;
    }

    public function searchFuncionarios()
    {
        $lista = Os::with('listaFuncionarios')->get();

        return $lista;
    }

    public function store(Request $request)
    {
        $os = new Os;
        $os->cliente = $request->input('cliente');
        $os->tipo = $request->input('tipo');
        $os->data = $request->input('data');
        $os->prioridade = $request->input('prioridade');
        $os->funcionarios = $request->input('funcionarios');
        $os->descricao = $request->input('descricao');
        $os->save();

        return response()->json([
            'status' => 200,
            'message' => 'Os added Sucessfully'
        ]);
    }
}
