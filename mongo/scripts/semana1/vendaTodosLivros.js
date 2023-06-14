use("ecomm");
let categories = db.products.updateMany({"CATEGORIA": "LIVROS"}, {$set : {"QUANTIDADE EM ESTOQUE" : 0}});
console.log(categories);