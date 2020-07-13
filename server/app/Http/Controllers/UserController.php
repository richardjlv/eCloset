<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:6|max:10',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);

        $user = User::create($input);

        return response()->json([
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
        ], 200);
    }

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|max:25',
            'email' => 'sometimes|email',
            'password' => 'sometimes|min:6|max:10',
            'confirmPassword' => 'required_with:password|same:password',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $data = $request->all();

        $user = $request->user();

        $user->name = $data['name'] ?? $user->name;
        $user->email = $data['email'] ?? $user->email;

        $pass = $data['password'] ?? null;

        $user->password = bcrypt($pass) ?? $user->password;

        $user->save();


        return response()->json([
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->id,
        ], 200);
    }
}
