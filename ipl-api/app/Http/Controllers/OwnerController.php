<?php

namespace App\Http\Controllers;

use App\Models\Owner;
use Illuminate\Http\Request;

class OwnerController extends Controller
{
    public function show($id)
    {
        $owner = Owner::find($id);

        if (!$owner) {
            return response()->json(['error' => 'Owner not found'], 404);
        }

        return response()->json($owner);
    }
}
