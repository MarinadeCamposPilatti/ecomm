use('ecomm');
const categories = db.products.updateMany({ CATEGORIA: 'LIVROS' }, { $set: { 'QUANTIDADE EM ESTOQUE': 0 } });
console.log(categories);
