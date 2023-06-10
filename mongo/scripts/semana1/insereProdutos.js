const data = require('./dados/ecomm-produtos.json');

use("ecomm");

let insert = db.products.insertMany(data);

console.log(insert);
