use("ecomm");
let categories = db.products.find({"status": "ATIVA"});
console.log(categories);