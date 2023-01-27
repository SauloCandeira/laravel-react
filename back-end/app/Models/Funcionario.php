<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Funcionario extends Model
{
    protected $table = 'funcionario';
    protected $primaryKey = 'id_funcionario';
    use HasFactory;

    // public function listaFuncionarios()
    // {
    //     return $this->hasMany(Os::class, 'id_funcionario');
    // }
}
