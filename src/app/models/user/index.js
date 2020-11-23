const mongoose = require('mongoose')
const crypto = require('crypto')

const UserSchema = new mongoose.Schema(
  {
    name: String,
    birthdate: Date,
    email: String,
    address: String,
    password: String,
    cpf: String,
    agency: {
      type: String,
      default: '0001',
    },
    account: {
      type: String,
      default: crypto.randomBytes(6).toString('hex'),
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', UserSchema)
