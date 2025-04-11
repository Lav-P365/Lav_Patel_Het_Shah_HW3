<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $table = 'teams';
    public $timestamps = false;

    public function owner()
    {
        return $this->belongsTo(Owner::class, 'owner_id');
}
}