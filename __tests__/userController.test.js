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

    // expect(response.body).toHaveProperty('entregadorValor');
    expect(response.body).toEqual(expect.objectContaining(response.body))
  })

  // it('it should be able list all gratifications', async () => {
  //   const response = await request(app).get('/entregadorvalor').send();

  //   expect(response.body).toEqual(expect.arrayContaining(response.body));
  // });

  // it('it should be able list gratifications for one person', async () => {
  //   const response = await request(app).get(`/entregadorvalor/${177}`).send();

  //   expect(response.body).toHaveProperty('entregadorValor');
  // });

  // it('it should not be able list gratifications for one person', async () => {
  //   const response = await request(app).get(`/entregadorvalor/${1600}`).send();

  //   expect(response.body).toEqual({
  //     error: 'Não foi possível encontrar o entregador.',
  //   });
  // });
})
