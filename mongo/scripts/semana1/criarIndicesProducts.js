use('ecomm');

const IndicesdosNomes = db.products.createIndex({ NOME: 1 });
const IndicesdasCategorias = db.products.createIndex({ CATEGORIA: 1 });
const IndicesdosPrecos = db.products.createIndex({ 'PREÇO UNITÁRIO': -1 });

console.log(IndicesdosNomes, '\n', IndicesdasCategorias, '\n', IndicesdosPrecos);
