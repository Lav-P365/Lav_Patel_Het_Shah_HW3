<?php

namespace App\Http\Controllers;

use App\Models\Team;

class TeamController extends Controller
{
    public function index()
    {
        $teams = Team::with('owner')->orderBy('team_name')->get();
        return response()->json($teams);
    }
}
