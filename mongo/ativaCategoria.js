use("ecomm");
let result = db.products.updateOne({nome: "ESPORTE"}, {$set : {status: "ATIVA"}});
console.log(result);