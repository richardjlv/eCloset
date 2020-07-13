<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class SessionController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }

        $credentials = request(['email', 'password']);

        if (!Auth::attempt($credentials))
            return response()->json([
                'error' => 'Unauthorized'
            ], 401);

        $user = request()->user();

        $data['id'] = $user->id;
        $data['name'] = $user->name;
        $data['email'] = $user->email;
        $data['token'] = $user->createToken('Personal Access Token')->accessToken;

        return response()->json($data, 200);
    }

    public function delete(Request $request)
    {
        $request->user()->token()->revoke();

        return response()->json(['success' => 'Successfully logged out'], 200);
    }
}
