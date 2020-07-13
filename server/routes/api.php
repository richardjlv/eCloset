<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('users', 'UserController@store');

Route::post('sessions', 'SessionController@store');

Route::get('stock/{product_id}', 'StockController@index');
Route::get('categories', 'CategoryController@index');

Route::get('products', 'ProductController@index');
Route::get('products/{id}', 'ProductController@show');


Route::group(['middleware' => 'auth:api'], function () {
    Route::put('users', 'UserController@update');

    Route::delete('sessions', 'SessionController@delete');

    Route::group(['middleware' => 'admin:api'], function () {
        Route::put('stock/{product_id}', 'StockController@update');

        Route::post('products', 'ProductController@store');
        Route::delete('products/{id}', 'ProductController@delete');

        Route::post('categories', 'CategoryController@store');
        Route::delete('categories', 'CategoryController@delete');
    });
});
