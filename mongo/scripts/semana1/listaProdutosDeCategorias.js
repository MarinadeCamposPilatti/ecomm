use("ecomm");
let categories = db.products.find({"CATEGORIA": {$in: ["LIVROS","CELULARES"]}});
console.log(categories);