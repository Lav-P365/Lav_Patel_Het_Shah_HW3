<?php

use Illuminate\Support\Facades\DB;

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/test-db', function () {
    return DB::table('teams')->get();
});

$router->group(['prefix' => 'api'], function () use ($router) {
    $router->get('/api/teams', 'IPLController@getTeams');
    $router->get('/api/owner/{id}', 'IPLController@getOwner');
});

$router->get('/', function () use ($router) {
    return $router->app->version();
});
