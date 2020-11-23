const md5 = require('md5')
const User = require('../../models/user')
const Amount = require('../../models/amount')
const SafeBox = require('../../models/safeBox')

class UserController {
  async store(req, res) {
    const spread = req.body
    const data = await User.create({
      ...spread,
      password: md5(spread.password),
    })
    const amount = await Amount.create({
      user_id: data._id,
      value: 0,
    })

    const safeAmount = await SafeBox.create({
      user_id: data._id,
      value: 0,
    })
    return res.json({ data, amount, safeAmount })
  }

  async index(req, res) {
    const data = await User.find()

    return res.json(data)
  }

  async destroy(req, res) {
    const _id = req.params.id
    await User.findByIdAndDelete({ _id })

    return res.json('Deleted user')
  }
}

module.exports = new UserController()
