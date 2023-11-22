<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $users = User::where('role', 'employee')->get();
        return Inertia::render('Users/Users', [
            'users' => $users
        ]);
    }

    public function destroy(User $user)
    {
        $user->delete();
        return response()->json([
            'message' => 'User deleted successfully'
        ]);
    }

    function update(Request $request, User $user)
    {
        $user->update($request->all());
        $res = $user->save();
        return response()->json([
            'message' => 'User updated successfully',
            'res'     => $res
        ]);
    }

    function store(Request $request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->surname = $request->surname;
        $user->role = $request->role;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->access = $request->access;
        $user->save();
        return response()->json([
            'message' => 'User created successfully'
        ]);
    }
}
