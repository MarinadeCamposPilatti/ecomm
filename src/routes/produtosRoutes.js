import express from 'express';
import ProdutoController from '../controller/produtosController.js';

const router = express.Router();

router
  .get('/produtos', ProdutoController.listarProdutos)
  .get('/produtos/:id', ProdutoController.listarProdutoPorId)
  .post('/produtos', ProdutoController.inserirProduto)
  .put('/produtos/:id', ProdutoController.atualizarProduto)
  .delete('/produtos/:id', ProdutoController.excluirProduto);

export default router;
