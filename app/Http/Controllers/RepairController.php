<?php

namespace App\Http\Controllers;

use App\Http\Requests\RepairUpdateRequest;
use App\Models\Repair;
use Inertia\Inertia;

class RepairController extends Controller
{
    public function index()
    {
        $repairs = Repair::with(['user'])->orderBy('date', 'DESC')->get();

        return Inertia::render('Repairs/Repairs', [
            'repairs' => $repairs
        ]);
    }

    public function update(Repair $repair, RepairUpdateRequest $request)
    {
        $repair->update($request->all());
        $res = $repair->save();
        return response()->json([
            'message' => 'Repair updated successfully',
            'res'     => $res
        ]);
    }
}
