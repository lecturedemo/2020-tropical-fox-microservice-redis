const User = require('../models/User')

class UserController {
  static findAll = async (req, res) => {
    const users = await User.findAll()
    res.status(200).json(users)
  }

  static insertOne = async (req, res) => {
    const user = await User.insertOne(req.body)
    res.status(200).json(user.ops[0])
  }

  static findById = async (req, res) => {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  }
}

module.exports = UserController
