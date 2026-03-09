<?php

namespace App\Actions\Fortify;

use App\Concerns\PasswordValidationRules;
use App\Concerns\ProfileValidationRules;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules, ProfileValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
        Validator::make($input, [
            ...$this->profileRules(),
            'password' => $this->passwordRules(),
        ])->validate();

        $user = User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => $input['password'],
        ]);

        // Link active guest blueprint to the registered user
        if (session()->has('active_guest_blueprint')) {
            $uniqueId = session()->get('active_guest_blueprint');
            $critique = \App\Models\Critique::where('unique_id', $uniqueId)->first();
            
            if ($critique) {
                $critique->update(['user_id' => $user->id]);
            }
            
            session()->forget('active_guest_blueprint');
        }

        return $user;
    }
}
