const mongoose = require('mongoose')

const DepositSchema = new mongoose.Schema(
  {
    value: {
      type: Number,
    },
    user_id: String,
    movement_type: String,
    user_id_send_receive: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Deposit', DepositSchema)
