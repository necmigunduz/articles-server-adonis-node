"use strict";

const Article = use("App/Models/Article");
const User = use("App/Models/User");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with articles
 */
class ArticleController {
  async all({ request, response, view }) {
    let users = await User.query().with("articles").fetch();
    return response.json(users);
  }
  /**
   * Show a list of all articles.
   * GET articles
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    let articles = await Article.query().fetch();
    return response.json(articles);
  }

  /**
   * Render a form to be used for creating a new article.
   * GET articles/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {}

  /**
   * Create/save a new article.
   * POST articles
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const user_id = request.input("user_id");
    const title = request.input("title");
    const description = request.input("description");

    const article = await new Article();
    article.user_id = user_id;
    article.title = title;
    article.description = description;
    await article.save();
    return response.json(article);
  }

  /**
   * Display a single article.
   * GET articles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const article = await Article.find(params.id)
    return response.json(article)
  }

  /**
   * Render a form to update an existing article.
   * GET articles/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {}

  /**
   * Update article details.
   * PUT or PATCH articles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const user_id = request.input("user_id");
    const title = request.input("title");
    const description = request.input("description");

    const article = await Article.find(params.id);
    article.user_id = user_id;
    article.title = title;
    article.description = description;
    await article.save();
    return response.json(article);
  }

  /**
   * Delete a article with id.
   * DELETE articles/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const article = await Article.find(params.id);
    await article.delete();
    return response.json({ message: "Article is succesffully deleted!" });
  }
}

module.exports = ArticleController;
