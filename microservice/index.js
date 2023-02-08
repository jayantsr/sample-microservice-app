const express = require('express');

const app = express();

const products = [
  {id: 1, name: 'Product 1'},
  {id: 2, name: 'Product 2'},
  {id: 3, name: 'Product 3'},
];

app.get('/api/v1/products', (req, res) => {
  res.send(products);
});

app.listen(3002, () => {
  console.log('Products service listening on port 3002');
});
