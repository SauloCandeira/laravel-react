<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OsTipo extends Model
{
    protected $table = 'os_tipo';
    protected $primaryKey = 'id_os_tipo';
    use HasFactory;
}
