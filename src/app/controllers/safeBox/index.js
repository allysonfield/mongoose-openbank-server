const SafeBox = require('../../models/safeBox')
const Amount = require('../../models/amount')

class SafeBoxController {
  async safe(req, res) {
    const { user_id, value } = req.body
    const amount = await Amount.findOne({ user_id })
    console.log('amount', amount)
    if (value > amount.value) {
      return res.json('Saldo insuficiente')
    }
    const safeFind = await SafeBox.findOne({
      user_id,
    })
    const more = safeFind.value + value
    const safe = await SafeBox.findOneAndUpdate(
      {
        user_id,
      },
      {
        value: more,
      }
    )

    const increment = amount.value - value
    await Amount.findOneAndUpdate(
      { user_id },
      {
        value: increment,
      }
    )

    const updated_amount = await Amount.findOne({ user_id })

    return res.json({ safe, updated_amount })
  }

  async withdraw(req, res) {
    const { user_id, value } = req.body

    const safeFind = await SafeBox.findOne({
      user_id,
    })
    if (value > safeFind.value) {
      return res.json('Saldo insuficiente')
    }
    const less = safeFind.value - value
    const safe = await SafeBox.findOneAndUpdate(
      {
        user_id,
      },
      {
        value: less,
      }
    )

    const amount = await Amount.findOne({ user_id })
    console.log('amount', amount)

    const increment = amount.value + value
    await Amount.findOneAndUpdate(
      { user_id },
      {
        value: increment,
      }
    )

    const updated_amount = await Amount.findOne({ user_id })

    return res.json({ safe, updated_amount })
  }

  async index(req, res) {
    const { user_id } = req.params
    const safeBox = await SafeBox.findOne({ user_id })
    return res.json(safeBox)
  }
}

module.exports = new SafeBoxController()
