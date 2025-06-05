<?php

namespace App\Http\Controllers;

use App\Http\Requests\RepairCalledRequest;
use App\Http\Requests\RepairDiagnosticRequest;
use App\Http\Requests\RepairFixedRequest;
use App\Http\Requests\RepairOrderedRequest;
use App\Http\Requests\RepairPickedUpRequest;
use App\Http\Requests\RepairStoreRequest;
use App\Http\Requests\RepairUpdateRequest;
use App\Mail\OrderDone;
use App\Models\Repair;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class RepairController extends Controller
{
    //find result of repair for id and customer phone then return only statuses
    public function resultOfRepair()
    {
        $query = preg_replace('/[^+0-9]/', '', request()->query('number'));

        if (substr($query, 0, 1) == 0 || substr($query, 0, 1) == '+') {
            $result = Repair::whereRaw("REGEXP_REPLACE(`customer_phone`, '[^0-9]', '') = ?", [$query])
                ->select(['id', 'is_fixed', 'is_ordered_component', 'component', 'device'])
                ->where('is_picked_up', 0)
                ->get();
        } else {
            $result = Repair::select(['id', 'is_fixed', 'is_ordered_component', 'component', 'device'])->where('is_picked_up', 0)->where('id', $query)->get();
        }

        if ($result) {
            return response()->json([
                'message' => 'Repair found',
                'res' => $result,
            ]);
        }

        return response()->json([
            'message' => 'Repair not found',
            'res' => $result,
        ]);

    }

    public function index()
    {

        $repairs = QueryBuilder::for(Repair::class)->with(['user', 'whoOrdered']);
        if (request()->has('search')) {
            $query = preg_replace('/[^+0-9]/', '', request()->query('search'));
            if (substr(request()->query('search'), 0, 1) == '-') {
                $repairs->where('id', $query);
            } else {
                $repairs->whereRaw("REGEXP_REPLACE(`customer_phone`, '[^0-9]', '') LIKE ?", ["%{$query}%"]);
            }
        }
        $repairs->allowedFilters([
            'is_fixed', 'is_ordered_component', 'is_picked_up', 'is_called',
            AllowedFilter::scope('need_order'),
            AllowedFilter::scope('need_call'),
        ])->orderBy('created_at', 'DESC');

        $repairs = $repairs->paginate(50);
        $employees = User::where('role', 'employee')->where('access', true)->get();
        $groupWhereOrdered = Repair::whereNotNull('where_ordered')->groupBy('where_ordered')->get(['where_ordered']);
        $groupDevices = Repair::whereNotNull('device')->groupBy('device')->get(['device']);

        return Inertia::render('Repairs/Repairs', [
            'repairs' => $repairs,
            'employees' => $employees,
            'groupWhereOrdered' => $groupWhereOrdered,
            'groupDevices' => $groupDevices,
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
                'res' => $repair,
            ]);
        }

        return response()->json([
            'message' => 'Repair updated failed',
            'res' => $repair,
        ]);
    }

    public function updateFixed(Repair $repair, RepairFixedRequest $request)
    {
        $updateRepair = $request->all();
        $updateRepair['date_fixed'] = date('Y-m-d H:i:s');
        $repair->update($updateRepair);
        if ($repair->save()) {
            if ($repair->is_fixed && ! empty($repair->customer_email)) {
                Mail::to($repair->customer_email)
                    ->send(new OrderDone($repair));
            }

            return response()->json([
                'message' => 'Repair updated successfully',
                'res' => $repair,
            ]);
        }

        return response()->json([
            'message' => 'Repair updated failed',
            'res' => $repair,
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
                'res' => $repair,
            ]);
        }

        return response()->json([
            'message' => 'Repair updated failed',
            'res' => $repair,
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
                'res' => $repair,
            ]);
        }

        return response()->json([
            'message' => 'Repair updated failed',
            'res' => $repair,
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
                'res' => $repair,
            ]);
        }

        return response()->json([
            'message' => 'Repair updated failed',
            'res' => $repair,
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
                'res' => $repair,
            ]);
        }

        return response()->json([
            'message' => 'Repair updated failed',
            'res' => $repair,
        ]);
    }

    public function counterFilters(): \Illuminate\Http\JsonResponse
    {
        $repairs = QueryBuilder::for(Repair::class)->with(['user', 'whoOrdered'])->allowedFilters([
            'is_fixed', 'is_ordered_component', 'is_picked_up', 'is_called',
            AllowedFilter::scope('need_order'),
            AllowedFilter::scope('need_call'),
        ])->count();

        return response()->json([
            'total' => $repairs,
        ]);
    }

    public function delete(Repair $repair)
    {
        if ($repair->delete()) {
            return response()->json([
                'message' => 'Repair deleted successfully',
                'res' => $repair,
            ]);
        }

        return response()->json([
            'message' => 'Repair deleted failed',
            'res' => $repair,
        ]);
    }
}
