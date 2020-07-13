<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    protected $fillable = [
        'AmountP', 'AmountM', 'AmountG', 'product_id',
    ];
}
