
  const categories = require('./categories.json');
  const products= require('./products.json');
  const users= require('./users.json');
  const orders= require('./orders.json');
  // Something more
  
  module.exports = () => ({
    categories: categories,
    products: products,
    users: users,
    orders: orders
  });