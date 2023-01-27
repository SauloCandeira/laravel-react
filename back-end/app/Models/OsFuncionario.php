<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OsFuncionario extends Model
{
    protected $table = 'os_funcionario';
    protected $primaryKey = 'id_os_funcionario';
    use HasFactory;

    // public function listaFuncionarios()
    // {
    //     return $this->hasMany(Os::class, 'id_funcionario');
    // }
}
