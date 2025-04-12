<?php

namespace App\Http\Controllers;

use App\Models\Team;
use App\Models\Owner;

class IPLController extends Controller

{
    public function getTeams()
    {
        $teams = Team::with('owner')->orderBy('team_name')->get();
        return response()->json($teams);
    }
    public function getOwner($id)
    {
        $owner = Owner::find($id);
        if (!$owner) {
            return response()->json(['error' => 'Owner not found'], 404);
        }
        return response()->json($owner);
}
}
