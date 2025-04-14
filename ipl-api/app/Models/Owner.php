<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Owner extends Model
{
    protected $table = 'owners';
    public $timestamps = false;

    protected $fillable = ['owner_name', 'bio'];
}
