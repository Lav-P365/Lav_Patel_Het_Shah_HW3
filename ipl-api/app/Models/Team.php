<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $table = 'teams';
    public $timestamps = false;

    protected $fillable = [
        'team_name', 'home_city', 'owner_id', 'founded_year', 'team_image'
    ];

    public function owner()
    {
        return $this->belongsTo(Owner::class, 'owner_id');
    }
}
