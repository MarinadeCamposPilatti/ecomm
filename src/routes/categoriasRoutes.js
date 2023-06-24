import express from 'express';
import CategoriaController from '../controller/categoriasController.js';

const router = express.Router();

router
  .get('/categorias', CategoriaController.listarCategorias)
  .get('/categorias/:id', CategoriaController.listarCategoriaPorId)
  .post('/categorias', CategoriaController.inserirCategoria)
  .patch('/categorias/:id', CategoriaController.ativarCategoria)
  .put('/categorias/:id', CategoriaController.atualizarCategoria)
  .delete('/categorias/:id', CategoriaController.excluirCategoria);

export default router;
