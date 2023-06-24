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

describe('GET - categorias', () => {
  it('Devolve lista de categorias', async () => {
    const resposta = await request(app)
      .get('/categorias')
      .set('Accept', 'application/json')
      .expect('content-type', /json/)
      .expect(200);

    expect(resposta.body).toHaveProperty('nome', 'status');
  });
});

let idResposta;
describe('POST - /categorias', () => {
  it('Adiciona uma nova categoria', async () => {
    const resposta = await request(app)
      .post('/categorias')
      .send({
        nome: 'Bombons',
        status: 'ATIVA',
      })
      .expect(201);

    idResposta = resposta.body.content.id;
  });
  it('Nome da categoria tem meons de 3 caracteres ou começa com um número', async () => {
    await request(app)
      .post('/categorias')
      .send({
        nome: '12Bombons',
        status: 'ATIVA',
      })
      .expect(500);
  });
  it('Não adiciona, quando o body estiver vazio', async () => {
    await request(app)
      .post('/categorias')
      .send({})
      .expect(400);
  });
});

describe('GET - /categorias/id', () => {
  it('Retorna categoria específica', async () => {
    await request(app)
      .get(`/categorias/${idResposta}`)
      .expect(200);
  });
});

describe('PATCH - /categoria/id', () => {
  test.each([
    ['status', { status: 'ATIVA' }],
  ])('Ativa o %s da categoria', async (chave, param) => {
    const requisicao = { request };
    const spy = jest.spyOn(requisicao, 'request');
    await requisicao.request(app)
      .put(`/categorias/${idResposta}`)
      .send(param)
      .expect(204);

    expect(spy).toHaveBeenCalled();
  });
});

describe('PUT - /categorias/id', () => {
  test.each([
    ['nome', { nome: 'Bombom' }],
    ['status', { status: 'INATIVA' }],
  ])('Atualiza o campo %s da categoria', async (chave, param) => {
    const requisicao = { request };
    const spy = jest.spyOn(requisicao, 'request');
    await requisicao.request(app)
      .put(`/categorias/${idResposta}`)
      .send(param)
      .expect(204);

    expect(spy).toHaveBeenCalled();
  });
});

describe('DELETE - /categorias/id', () => {
  it('Exclui categoria específica', async () => {
    await request(app)
      .delete(`/categorias/${idResposta}`)
      .expect(200);
  });
});
