<?php

namespace App\Http\Controllers;

use App\Http\Requests\RepairCalledRequest;
use App\Http\Requests\RepairDiagnosticRequest;
use App\Http\Requests\RepairFixedRequest;
use App\Http\Requests\RepairOrderedRequest;
use App\Http\Requests\RepairPickedUpRequest;
use App\Http\Requests\RepairStoreRequest;
use App\Http\Requests\RepairUpdateRequest;
use App\Models\Repair;
use App\Models\User;
use Inertia\Inertia;
use Spatie\QueryBuilder\QueryBuilder;

class RepairController extends Controller
{
    public function index()
    {

        $repairs = QueryBuilder::for(Repair::class)->with(['user', 'whoOrdered'])->allowedFilters(['is_fixed', 'is_ordered_component', 'is_picked_up', 'is_called'])->orderBy('created_at', 'DESC')->paginate();
        $employees = User::where('role', 'employee')->where('access', true)->get();
        $groupWhereOrdered = Repair::whereNotNull('where_ordered')->groupBy('where_ordered')->get(['where_ordered']);
        $groupDevices = Repair::whereNotNull('device')->groupBy('device')->get(['device']);
        return Inertia::render('Repairs/Repairs', [
            'repairs'           => $repairs,
            'employees'         => $employees,
            'groupWhereOrdered' => $groupWhereOrdered,
            'groupDevices'      => $groupDevices
        ]);
    }

    //Store repair
    public function store(RepairStoreRequest $request)
    {
        $repair = new Repair();
        $repair->fill($request->all());
        $repair->save();
    }

    public function update(Repair $repair, RepairUpdateRequest $request)
    {
        $repair->update($request->all());
        if ($repair->save()) {
            return response()->json([
                'message' => 'Repair updated successfully',
                'res'     => $repair
            ]);
        }
        return response()->json([
            'message' => 'Repair updated failed',
            'res'     => $repair
        ]);
    }

    public function updateFixed(Repair $repair, RepairFixedRequest $request)
    {
        $updateRepair = $request->all();
        $updateRepair['date_fixed'] = date('Y-m-d H:i:s');
        $repair->update($updateRepair);
        if ($repair->save()) {
            return response()->json([
                'message' => 'Repair updated successfully',
                'res'     => $repair
            ]);
        }
        return response()->json([
            'message' => 'Repair updated failed',
            'res'     => $repair
        ]);
    }

    public function updateOrdered(Repair $repair, RepairOrderedRequest $request)
    {
        $updateRepair = $request->all();
        $updateRepair['date_ordered'] = date('Y-m-d H:i:s');
        $repair->update($updateRepair);
        if ($repair->save()) {
            return response()->json([
                'message' => 'Repair updated successfully',
                'res'     => $repair
            ]);
        }
        return response()->json([
            'message' => 'Repair updated failed',
            'res'     => $repair
        ]);
    }

    public function updateCalled(Repair $repair, RepairCalledRequest $request)
    {
        $updateRepair = $request->all();
        if ($updateRepair['is_called']) {
            $updateRepair['date_called'] = date('Y-m-d H:i:s');
        } else {
            $updateRepair['date_called'] = null;
        }
        $repair->update($updateRepair);
        if ($repair->save()) {
            return response()->json([
                'message' => 'Repair updated successfully',
                'res'     => $repair
            ]);
        }
        return response()->json([
            'message' => 'Repair updated failed',
            'res'     => $repair
        ]);

    }

    public function updateDiagnostic(Repair $repair, RepairDiagnosticRequest $request)
    {
        $updateRepair = $request->all();
        $updateRepair['date_diagnostic'] = date('Y-m-d H:i:s');
        $repair->update($updateRepair);
        if ($repair->save()) {
            return response()->json([
                'message' => 'Repair updated successfully',
                'res'     => $repair
            ]);
        }
        return response()->json([
            'message' => 'Repair updated failed',
            'res'     => $repair
        ]);
    }

    public function updatePickedUp(Repair $repair, RepairPickedUpRequest $request)
    {
        $updateRepair = $request->all();
        $updateRepair['date_picked_up'] = date('Y-m-d H:i:s');
        $repair->update($updateRepair);
        if ($repair->save()) {
            return response()->json([
                'message' => 'Repair updated successfully',
                'res'     => $repair
            ]);
        }
        return response()->json([
            'message' => 'Repair updated failed',
            'res'     => $repair
        ]);
    }

    public function counterFilters(): \Illuminate\Http\JsonResponse
    {
        $repairs = QueryBuilder::for(Repair::class)->with(['user', 'whoOrdered'])->allowedFilters(['is_fixed', 'is_ordered_component', 'is_picked_up', 'is_called'])->count();
        return response()->json([
            'total' => $repairs
        ]);
    }
}
