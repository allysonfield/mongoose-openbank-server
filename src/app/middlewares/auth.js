const jwt = require('jsonwebtoken')
const util = require('util')

const { promisify } = util

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization
  console.log('token', authHeader)
  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' })
  }

  const [, token] = authHeader.split(' ')

  try {
    await promisify(jwt.verify)(
      token,
      '4cadia04let19neoqdoitNeo2039483904809234034pass2w3e4r5tY0U6y7u8i9o0path'
    )

    // console.log(decoded);

    // req.userId = decoded.idpessoa;
    // req.nome = decoded.nome;
    // req.graduacao = decoded.graduacao;

    return next()
  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' })
  }
}
