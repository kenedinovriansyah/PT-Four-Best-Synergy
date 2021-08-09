<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthControllers extends Controller
{
    public function login(Request $request) {
        $val = Validator::make($request->all(),[
            'username' => 'required',
            'password' => 'required'
        ]);
        if($val->fails()) {
            return response()->json($val->errors(),400);
        }
        if(!$token = JWTAuth::attempt(['email' => $request->username, 'password' => $request->password])) {
            return response()->json([
                'message' => 'Unauthorized'
            ],400);
        }
        return $this->responseWithToken($token);
    }

    protected function responseWithToken($token) {
        return [
            'token' => $token
        ];
    }
}
