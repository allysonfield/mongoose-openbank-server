const Amount = require('../../models/amount')

class AmountController {
  async store(req, res) {
    const data = await Amount.create(req.body)

    return res.json(data)
  }

  async index(req, res) {
    const amount = await Amount.findOne({ user_id: req.params.user_id })

    return res.json(amount)
  }

  async all(req, res) {
    const init = new Date(req.params.initDate)
    const final = new Date(req.params.endDate)
    console.log('datas', { init, final })
    const statement = await Amount.aggregate([
      {
        $match: {
          user_id: req.params.user_id,
          createdAt: { $gte: init, $lt: final },
        },
      },
      {
        $group: {
          _id: {
            month: { $month: '$createdAt' },
            day: { $dayOfMonth: '$createdAt' },
            year: { $year: '$createdAt' },
            value: '$value',
          },
        },
      },
    ])
    return res.json(statement)
  }
}

module.exports = new AmountController()
