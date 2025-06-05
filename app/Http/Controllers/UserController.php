<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index(Request $request): \Inertia\Response
    {
        $users = User::all();

        return Inertia::render('Users/Users', [
            'users' => $users,
        ]);
    }

    public function show(User $user): \Inertia\Response
    {
        return Inertia::render('Users/UserEdit', [
            'user' => $user,
        ]);
    }

    public function destroy(User $user)
    {
        $user->delete();

        return response()->json([
            'message' => 'User deleted successfully',
        ]);
    }

    public function update(UpdateUserRequest $request, User $user)
    {

        $user->update($request->validated());
        $user->save();

        return back()->with('message', 'User updated successfully');
    }

    public function store(Request $request)
    {
        $user = new User;
        $user->name = $request->name;
        $user->surname = $request->surname;
        $user->role = $request->role;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->access = $request->access;
        $user->save();

        return response()->json([
            'message' => 'User created successfully',
        ]);
    }
}
