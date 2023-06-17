#!/usr/bin/env node

import CategoryService from './CategoryService.js';

const caminho = process.argv;

function processaComando(argumentos) {
  const caminhoCategorias = argumentos[2];
  const id = argumentos[3];
  const novaCategoria = argumentos[3];
  const categoriaAtulizada = argumentos[4];
  switch (caminhoCategorias) {
    case '--listarCategorias':
      CategoryService.findCategories(caminhoCategorias);
      break;
    case '--recuperarCategoriaPorId':
      CategoryService.findCategories(caminhoCategorias, id);
      break;
    case '--inserirCategoria':
      CategoryService.createCategory(novaCategoria);
      break;
    case '--atualizarCategoria':
      CategoryService.updateCategory(id, categoriaAtulizada);
      break;
    default:
      break;
  }
}
processaComando(caminho);
