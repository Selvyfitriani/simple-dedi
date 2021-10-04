'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/villages', 'VillageController.index')

Route.get('/villages/create', 'VillageController.create')

Route.get('/villages/edit/:id', 'VillageController.edit')

Route.get('/villages/:id', 'VillageController.detail')

Route.post('/villages', 'VillageController.store')

Route.put('/villages/:id','VillageController.update')

Route.delete('/villages/:id','VillageController.delete')
