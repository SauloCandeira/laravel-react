<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Os;

class OsController extends Controller
{

    public function search()
    {
        $os = Os::with('condominio')->get();

        return $os;
        // return response()->json([
        //     'status' => 200,
        //     'message' => 'Os returned Sucessfully'
        // ]);
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
