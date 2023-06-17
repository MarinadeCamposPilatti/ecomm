use('ecomm');
const categories = db.products.find({ CATEGORIA: { $in: ['LIVROS', 'CELULARES'] } });
console.log(categories);
