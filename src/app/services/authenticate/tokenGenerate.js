const jwt = require('jsonwebtoken');

const secret =
  '4cadia04let19neoqdoitNeo2039483904809234034pass2w3e4r5tY0U6y7u8i9o0path';

class TokenGenerate {
  async execute({ id, email, userType }) {
    const token = jwt.sign({ id, email, userType }, secret, {
      expiresIn: '8h',
    });
    return { token };
  }
}

module.exports = new TokenGenerate();
