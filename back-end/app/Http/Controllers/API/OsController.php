<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Os;
use App\Models\OsFuncionario;
use App\Models\Funcionarios;
use App\Models\OsStatus;
use Carbon\Carbon;
class OsController extends Controller
{

    public function search()
    {
        $os = Os::with('condominio', 'status', 'tipo', 'osfuncionario', 'funcionario')->get();

        return $os;
    }


    public function searchId($id)
    {

        $os = Os::with('listaFuncionarios','listaRespostas', 'funcionario','condominio', 'status', 'tipo', 'osfuncionario', 'funcionario')->where('id_os', $id)->first();

        // $os = Os::find($id);
        // $os = Os::with('condominio', 'status', 'tipo', 'osfuncionario', 'funcionario')->whereIn('id', $id)->get();
        // dd($os);
        return $os;
    }

    public function arquivar($id)
    {
        $os = Os::find($id);
        $os->dt_fim = Carbon::now()->format('Y-m-d H:i:s');
        $os->update();
        // $dataHoje = Carbon::now()->format('Y-m-d');
        // $os->update([
        //     "dt_fim" => $dataHoje
        // ]);
        // $os->dt_fim
        return response()->json([
            'status' => 200,
            'message' => 'O.S arquivada com sucesso!'
        ]);
        // dd($os);
        // $os = Os::with('listaRespostas', 'funcionario','condominio', 'status', 'tipo', 'osfuncionario', 'funcionario')->where('id_os', $id)->first();

        // $os = Os::find($id);
        // $os = Os::with('condominio', 'status', 'tipo', 'osfuncionario', 'funcionario')->whereIn('id', $id)->get();
        // dd($os);
        // return $os;
    }


    public function searchStatus()
    {
        $lista = OsStatus::with('listaDeOs', 'listaDeOs.condominio', 'listaDeOs.status', 'listaDeOs.tipo', 'listaDeOs.osfuncionario', 'listaDeOs.funcionario', 'listaDeOs.listaFuncionarios', 'listaDeOs.listaRespostas')->get();

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

        // 1º - Instanciar Models
        $os = new Os;

        // 2º - Salvar Dados da O.S
        $os->id_os_status = 6;
        $os->id_funcionario = 1;
        $os->id_condominio = $request->input('condominio');
        $os->id_empresa = $request->input('cliente');
        $os->id_os_tipo = $request->input('tipo');
        $os->dt_agendamento = $request->input('data');
        $os->nu_prioridade = $request->input('prioridade');
        $os->ds_os = $request->input('descricao');
        $os->save();

        // 2º - Salvar Funcionarios da OS
        if(count($request->input('funcionarios')) > 0)
        {
            foreach ($request->input('funcionarios') as $valor) {

                $osFuncionario = new OsFuncionario();
                $osFuncionario->id_os = $os->id_os;
                $osFuncionario->id_funcionario = $valor;
                $osFuncionario->save();

            }
        }


        return response()->json([
            'status' => 200,
            'message' => 'O.S criada com sucesso!'
        ]);
    }
}
