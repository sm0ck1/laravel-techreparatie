<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RepairOrderedRequest extends FormRequest
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
            'is_ordered_component' => 'required|boolean',
            'where_ordered'        => [Rule::requiredIf(function () {
                return $this->input('is_ordered_component') == true;
            })],
            'who_ordered_id'       => 'required|integer',
            'cost'                 => 'required|min:0|numeric',
            'component'            => [Rule::requiredIf(function () {
                return $this->input('is_ordered_component') == true;
            })],
        ];
    }
}
