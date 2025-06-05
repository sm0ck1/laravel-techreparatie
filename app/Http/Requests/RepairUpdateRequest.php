<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class RepairUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {

        return [
            'user_id' => 'nullable',
            'who_ordered_id' => 'nullable',
            'order_number' => 'nullable',
            'customer_name' => 'nullable',
            'customer_phone' => 'nullable',
            'device' => 'nullable',
            'problem_description' => 'nullable',
            'solution_description' => 'nullable',
            'note' => 'nullable',
            'order' => 'nullable',
            'invoice' => 'nullable',
            'cost' => 'nullable',
            'price' => 'nullable',
            'called' => 'nullable',
            'fixed' => 'nullable',
            'picked_up' => 'nullable',
        ];
    }
}
