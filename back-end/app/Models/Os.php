<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Os extends Model
{
    use HasFactory;
    protected $table = 'os';
    protected $primaryKey = 'id_os';

    public function condominio()
    {
        return $this->belongsTo(Condominio::class, 'id_condominio');
    }

}
