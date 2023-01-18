<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Condominio extends Model
{
    protected $table = 'condominio';
    protected $primaryKey = 'id_condominio';
    use HasFactory;
}
