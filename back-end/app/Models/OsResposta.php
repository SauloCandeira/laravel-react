<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OsResposta extends Model
{
    protected $table = 'os_resposta';
    protected $primaryKey = 'id_os_resposta';
    use HasFactory;

    // public function listaDeRespostas()
    // {
    //     return $this->hasMany(Os::class, 'id_os');
    // }
}
