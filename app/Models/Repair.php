<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Repair extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',

        'customer_name',
        'customer_phone',

        'device',
        'problem_description',
        'component',
        'note',

        'invoice',
        'cost',
        'price',

        'is_ordered_component',
        'where_ordered',
        'who_ordered_id',
        'date_ordered',

        'is_called',
        'date_called',

        'is_fixed',
        'solution_description',
        'date_fixed',

        'is_picked_up',
        'date_picked_up',

        'is_diagnostic',
        'diagnostic_description',
        'date_diagnostic',
    ];

    protected $appends = [
        'key',
    ];

    protected function Cost(): Attribute
    {
        return Attribute::make(
            set: function ($value) {
                return number_format((float)$value, 2, '.', '');
            }
        );
    }

    protected function Price(): Attribute
    {
        return Attribute::make(
            set: function ($value) {
                return number_format((float)$value, 2, '.', '');
            }
        );
    }

    protected function dateDiagnostic(): Attribute
    {
        return Attribute::make(
            get: fn($value) => $value ? \Carbon\Carbon::parse($value)->format('d.m.Y') : null,
        );
    }

    protected function dateOrdered(): Attribute
    {
        return Attribute::make(
            get: fn($value) => $value ? \Carbon\Carbon::parse($value)->format('d.m.Y') : null,
        );
    }

    protected function dateCalled(): Attribute
    {
        return Attribute::make(
            get: fn($value) => $value ? \Carbon\Carbon::parse($value)->format('d.m.Y') : null,
        );
    }


    protected function dateFixed(): Attribute
    {
        return Attribute::make(
            get: fn($value) => $value ? \Carbon\Carbon::parse($value)->format('d.m.Y') : null,
        );
    }

    protected function datePickedUp(): Attribute
    {
        return Attribute::make(
            get: fn($value) => $value ? \Carbon\Carbon::parse($value)->format('d.m.Y') : null,
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

    public function whoOrdered()
    {
        return $this->belongsTo(User::class);
    }

    public function scopeNeedOrder(Builder $query): void
    {
        $query->where('component', '!=', '')
            ->where('is_fixed', 0)
            ->where('is_ordered_component', 0);
    }

    public function scopeNeedCall(Builder $query): void
    {
        $query->where(function ($builder) {
            $builder->where('is_called', 0)
                ->orWhere('is_called', 2);
//                ->orWhereDate('date_called', '>=', Carbon::now()->addDay()->format('Y-m-d 00:00:00'));
        })->where('is_fixed', 1)->where('is_picked_up', 0);
    }
}
