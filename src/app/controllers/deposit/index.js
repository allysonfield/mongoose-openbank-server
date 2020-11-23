const Deposit = require('../../models/deposit')
const Amount = require('../../models/amount')
const User = require('../../models/user')

class DepositController {
  async deposit(req, res) {
    const { user_id, value } = req.body
    const deposit = await Deposit.create({
      user_id,
      value,
      movement_type: 'deposit',
    })
    const amount = await Amount.findOne({ user_id })
    console.log('amount', amount)
    const increment = req.body.value + amount.value
    await Amount.findOneAndUpdate(
      { user_id },
      {
        value: increment,
      }
    )

    const updated_amount = await Amount.findOne({ user_id })

    return res.json({ deposit, updated_amount })
  }

  async transfer_send(req, res) {
    const { user_id, value, cpf, agency, account } = req.body
    console.log('body', req.body)
    const myAmount = await Amount.findOne({ user_id })
    if (value > myAmount.value) {
      return res.json('Saldo insuficiente')
    }
    const userOther = await User.findOne({
      cpf,
      agency,
      account,
    })
    if (!userOther) {
      return res.json('Destinatário não encontrado')
    }
    console.log('userOther', userOther)
    const deposit = await Deposit.create({
      user_id,
      value,
      movement_type: 'transfer-send',
      user_id_send_receive: userOther._id,
    })
    // console.log('myAmount', myAmount);
    const increment = myAmount.value - req.body.value
    await Amount.findOneAndUpdate(
      { user_id },
      {
        value: increment,
      }
    )

    const receptorDeposit = await Deposit.create({
      user_id: userOther._id,
      value,
      movement_type: 'transfer-receive',
      user_id_send_receive: user_id,
    })

    const receptorAmount = await Amount.findOne({ user_id: userOther._id })
    console.log('receptorAmount', receptorAmount)
    const increment2 = req.body.value + receptorAmount.value
    await Amount.findOneAndUpdate(
      { user_id: userOther._id },
      {
        value: increment2,
      }
    )

    const updated_amount = await Amount.findOne({ user_id })

    return res.json({ deposit, updated_amount, receptorDeposit })
  }

  async transfer_receive(req, res) {
    const { user_id, value } = req.body
    const deposit = await Deposit.create({
      user_id,
      value,
      movement_type: 'transfer-receive',
    })
    const amount = await Amount.findOne({ user_id })
    console.log('amount', amount)
    const increment = req.body.value + amount.value
    await Amount.findOneAndUpdate(
      { user_id },
      {
        value: increment,
      }
    )

    const updated_amount = await Amount.findOne({ user_id })

    return res.json({ deposit, updated_amount })
  }

  async index(req, res) {
    const data = await Deposit.find({ user_id: req.params.user_id })

    return res.json(data)
  }

  async all(req, res) {
    const deposit = await Deposit.aggregate([
      {
        $match: {
          user_id: req.params.user_id,
        },
      },
      {
        $group: {
          _id: {
            month: { $month: '$createdAt' },
            day: { $dayOfMonth: '$createdAt' },
            year: { $year: '$createdAt' },
            date: {
              $dateToString: {
                format: '%Y-%m-%d %H:%M:%S',
                date: '$createdAt',
                timezone: 'America/New_York',
              },
            },
            value: '$value',
            type: '$movement_type',
            id: '$_id',
            user_id_send_receive: '$user_id_send_receive',
          },
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: '_id.user_id_send_receive',
          foreignField: '_id',
          as: 'user',
        },
      },
    ])

    return res.json(deposit)
  }
}

module.exports = new DepositController()
