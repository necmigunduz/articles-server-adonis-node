"use strict";

const User = use("App/Models/User");

class UserController {
  async index({ request, response }) {
    const users = await User.all();

    return response.json(users);
  }

  async show({ params, response }) {
    const user = await User.find(params.id);

    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }

    return response.json(user);
  }

  async store({ request, response }) {
    const userData = request.only(["name", "email", "password"]);

    const user = await User.create(userData);

    return response.status(201).json(user);
  }

  async update({ params, request, response }) {
    const user = await User.find(params.id);

    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }

    user.merge(request.only(["name", "email", "password"]));
    await user.save();

    return response.json(user);
  }

  async destroy({ params, response }) {
    const user = await User.find(params.id);

    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }

    await user.delete();

    return response.status(204).json(null);
  }
}

module.exports = UserController;
