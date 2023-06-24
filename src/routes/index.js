import express from 'express';
import categorias from './categoriasRoutes.js';
import produtos from './produtosRoutes.js';

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ titulo: 'API - ECOMMERCE' });
  });

  app.use(
    express.json(),
    categorias,
    produtos,
  );
};

export default routes;
