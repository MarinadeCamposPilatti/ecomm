const data = require('../../dados/ecomm-produtos.json');

use('ecomm');

const insert = db.products.insertMany(data);

console.log(insert);
