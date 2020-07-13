<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name', 'price', 'image', 'details',
    ];

    protected $casts = [
        'details' => 'array',
    ];

    public function stock()
    {
        return $this->hasOne('App\Stock');
    }

    public function category()
    {
        return $this->belongsTo('App\Category');
    }
}
