"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});
// User routes
Route.get("/users", "UserController.index");
Route.get("/users/:id", "UserController.show");
Route.post("/users", "UserController.store");
Route.put("/users/:id", "UserController.update");
Route.delete("/users/:id", "UserController.destroy");
// Article routes
Route.get("/api/all", "ArticleController.all");
Route.get("/api/articles", "ArticleController.index");
Route.get("/api/articles/:id", "ArticleController.show");
Route.post("/api/articles", "ArticleController.store");
Route.put("/api/articles/:id", "ArticleController.update");
Route.delete("/api/articles/:id", "ArticleController.destroy");
