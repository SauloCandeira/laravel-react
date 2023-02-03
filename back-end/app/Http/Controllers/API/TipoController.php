<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\OsTipo;
use Illuminate\Http\Request;

class TipoController extends Controller
{

    public function searchTipos()
    {
        $tipos = OsTipo::all();
        return $tipos;
    }
}
