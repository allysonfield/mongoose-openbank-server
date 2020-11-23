const Statement = require('../../models/amount')

class StatementController {
  async store(req, res) {
    const data = await Statement.create(req.body)

    return res.json(data)
  }

  async index(req, res) {
    const data = await Statement.find({ user_id: req.params.user_id })

    return res.json(data)
  }

  async all(req, res) {
    const init = new Date(req.params.initDate)
    const final = new Date(req.params.endDate)
    console.log('datas', { init, final })
    const statement = await Statement.aggregate([
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

module.exports = new StatementController()
