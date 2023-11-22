<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RepairFixedRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'is_fixed' => 'required|boolean',
            'user_id' => 'required|integer',
            'price' => 'required|numeric',
            'solution_description' => 'required|string'
        ];
    }
}
