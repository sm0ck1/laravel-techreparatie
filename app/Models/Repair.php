<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Repair extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'order_number',
        'customer_name',
        'customer_phone',
        'device',
        'problem_description',
        'solution_description',
        'component',
        'note',
        'date',
        'invoice',
        'cost',
        'price',
        'is_ordered_component',
        'is_called',
        'is_fixed',
        'is_picked_up',
    ];

    protected $appends = [
        'key',
    ];

    protected function Cost(): Attribute
    {
        return Attribute::make(
            set: function (string $value) {
                $value = str_replace(',', '.', $value);
                return number_format((float)$value, 2);
            }
        );
    }

    protected function Price(): Attribute
    {
        return Attribute::make(
            set: function (string $value) {
                $value = str_replace(',', '.', $value);
                return number_format((float)$value, 2);
            }
        );
    }

    public function getKeyAttribute()
    {
        return $this->id;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
