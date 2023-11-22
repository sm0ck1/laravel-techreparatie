<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RepairStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'customer_name' => 'required|string',
            'customer_phone' => 'required|string',
            'device' => 'required|string',
            'problem_description' => 'required|string',
        ];
    }
}
