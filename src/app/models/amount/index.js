const mongoose = require('mongoose')

const AmountSchema = new mongoose.Schema(
  {
    value: {
      type: Number,
    },
    user_id: String,
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Amount', AmountSchema)
