import request from 'supertest';
import {
  describe, expect, it, jest,
} from '@jest/globals';
import app from '../../app.js';

let server;
beforeEach(() => {
  const port = 3030;
  server = app.listen(port);
});

afterEach(() => {
  server.close();
});

describe('GET - produtos', () => {
  it('Devolve lista de produtos', async () => {
    const resposta = await request(app)
      .get('/produtos')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);

    expect(resposta.body).toHaveProperty('NOME', 'SLUG', 'PRECO_UNITARIO', 'QUANTIDADE_EM_ESTOQUE', 'CATEGORIA');
  });
});

let idResposta;
describe('POST - /produtos', () => {
  it('Adiciona um novo produto', async () => {
    const resposta = await request(app)
      .post('/produtos')
      .send({
        NOME: 'Sofá',
        DESCRIÇÃO: 'Sofá',
        SLUG: 'sofa-novo',
        PREÇO_UNITARIO: 2500.00,
        QUANTIDADE_EM_ESTOQUE: 2,
      })
      .expect(201);

    idResposta = resposta.body.content.id;
  });
  it('Alguma categoria do produto não foi adiciona ou o valor de alguma categoria específica está incorreto', async () => {
    await request(app)
      .post('/produtos')
      .send(
        {
          NOME: 'Sofá 8',
          SLUG: 'sofa',
          PRECO_UNITARIO: 1450.00,
          QUANTIDADE_EM_ESTOQUE: 2,
          CATEGORIA: '6494b7a6b0d9440da3e0337e',
        },
      )
      .expect(500);
  });
  it('Não adiciona, quando o body estiver vazio', async () => {
    await request(app)
      .post('/produtos')
      .send({})
      .expect(400);
  });
});

describe('GET - /produtos/id', () => {
  it('Retorna categoria específica', async () => {
    await request(app)
      .get(`/produtos/${idResposta}`)
      .expect(200);
  });
});

describe('PUT - /produtos/id', () => {
  test.each([
    ['NOME', { NOME: 'Sofá 8' }],
    ['SLUG', { SLUG: 'sofa' }],
    ['PRECO_UNITARIO', { PRECO_UNITARIO: 1450.00 }],
    ['QUANTIDADE_EM_ESTOQUE', { QUANTIDADE_EM_ESTOQUE: 2 }],
    ['CATEGORIA', { CATEGORIA: '6494b7a6b0d9440da3e0337e' }],
  ])('Atualiza o campo %s da categoria', async (chave, param) => {
    const requisicao = { request };
    const spy = jest.spyOn(requisicao, 'request');
    await requisicao.request(app)
      .put(`/produtos/${idResposta}`)
      .send(param)
      .expect(204);

    expect(spy).toHaveBeenCalled();
  });
});

describe('DELETE - /produtos/id', () => {
  it('Exclui categoria específica', async () => {
    await request(app)
      .delete(`/produtos/${idResposta}`)
      .expect(200);
  });
});
