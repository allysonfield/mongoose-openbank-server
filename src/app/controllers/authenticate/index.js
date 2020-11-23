const md5 = require('md5')
const User = require('../../models/user')

const TokenGenerate = require('../../services/authenticate/tokenGenerate')

class AuthenticateController {
  async store(req, res) {
    const data = await User.create(req.body)

    return res.json(data)
  }

  async index(req, res) {
    const spread = req.body
    console.log(spread)
    const user = await User.findOne({
      ...spread,
      password: md5(spread.password),
    })

    if (!user) {
      return res.json('Senha ou Email incorretos')
    }

    const { token } = await TokenGenerate.execute({
      id: user.id,
      email: user.email,
      cpf: user.cpf,
    })

    return res.json({ user, token, message: 'Logado com sucesso' })
  }
}

module.exports = new AuthenticateController()
