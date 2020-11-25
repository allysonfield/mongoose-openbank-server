const request = require('supertest')

const app = require('../src/server')

describe('UserController', () => {
  it('it should be able create a new user', async () => {
    const response = await request(app).post('/user/register').send({
      name: 'xico',
      email: 'johndoe22@gmail.com',
      password: 'minhasenha',
      address: 'Rua das flores',
      birthdate: '1995-08-24 ',
      cpf: '91998999988',
    })

    expect(response.body).toEqual(expect.objectContaining(response.body))
  })

  it('it should be able logging in', async () => {
    const response = await request(app).post('/authenticate/login').send({
      email: 'johndoe22@gmail.com',
      password: 'minhasenha',
    })

    expect(response.body).toEqual(expect.objectContaining(response.body))
  })
})
