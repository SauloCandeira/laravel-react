<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OsStatus extends Model
{
    protected $table = 'os_status';
    protected $primaryKey = 'id_os_status';
    use HasFactory;

    public function listaDeOs()
    {
        return $this->hasMany(Os::class, 'id_os_status');
    }
}
