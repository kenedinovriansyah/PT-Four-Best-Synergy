<?php

namespace Tests\Unit;

use App\Models\User;
use Tests\TestCase;
use Faker\Factory as Faker;

class UserTest extends TestCase
{
    public function test_user_login() {
        $user = User::first();
        if($user) {
            $response = $this->post('/api/v1/auth/login',[
                'username' => $user->email,
                'password' => 'Password'
            ]);
            $response->assertStatus(200);
            $this->assertNotEquals($response['token'],null);
        } else $this->markTestSkipped("user noth have data");
    }
}
