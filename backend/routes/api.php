<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/contacts', 'ContactController@contacts');
Route::get('/mycontacts', 'ContactController@myContacts');
Route::get('/contact/{id}', 'ContactController@show');
Route::delete('/destroy/contact/{id}', 'ContactController@deleteContact');
Route::post('/update/contact/{id}', 'ContactController@update');
Route::post('/store/contact', 'ContactController@store');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
