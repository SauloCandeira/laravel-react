<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Os extends Model
{
    public $timestamps = false;
    use HasFactory;
    protected $table = 'os';
    protected $primaryKey = 'id_os';

    public function condominio()
    {
        return $this->belongsTo(Condominio::class, 'id_condominio');
    }

    public function status()
    {
        return $this->belongsTo(OsStatus::class, 'id_os_status');
    }

    public function tipo()
    {
        return $this->belongsTo(OsTipo::class, 'id_os_tipo');
    }

    public function osfuncionario()
    {
        return $this->hasMany(OsFuncionario::class, 'id_os_funcionario');
    }

    public function funcionario()
    {
        return $this->hasMany(Funcionario::class, 'id_funcionario');
    }

    public function listaFuncionarios()
    {
        return $this->hasMany(OsFuncionario::class, 'id_os');
    }

    public function listaRespostas()
    {
        return $this->hasMany(OsResposta::class, 'id_os');
    }

}
