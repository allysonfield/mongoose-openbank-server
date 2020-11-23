const mongoose = require('mongoose')

const SafeBoxSchema = new mongoose.Schema(
  {
    value: {
      type: Number,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Safebox', SafeBoxSchema)
