const express = require('express');
const axios = require('axios');

const app = express();

app.get('/api/v1/products', async (req, res) => {
  try {
    const productsResponse = await axios.get(
      'http://products-service:3002/api/v1/products'
    );
    res.send(productsResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).send({error: 'Failed to fetch products'});
  }
});

app.listen(3001, () => {
  console.log('Gateway listening on port 3001');
});
