const express = require('express');

const app = express();

const PORT = 8000;
const HOST = 'localhost';


const products = [
  { id: 1, name: 'Phone', price: 500, category: 'electronics' },
  { id: 2, name: 'Laptop', price: 1000, category: 'electronics' },
  { id: 3, name: 'Headphones', price: 100, category: 'electronics' },
  { id: 4, name: 'Chair', price: 150, category: 'furniture' },
  { id: 5, name: 'Table', price: 300, category: 'furniture' },
  { id: 6, name: 'Sofa', price: 700, category: 'furniture' }
];

app.get('/', (req, res) => {
  res.json('text');
});


app.get('/products', (req, res) => {
  const { take, category } = req.query;


  let result = products;
  if (category) {
    result = result.filter((p) => p.category === category);
  }


  if (!take) {
    return res.status(200).json(result);
  }

  const takeNumber = Number(take);


  if (!Number.isInteger(takeNumber) || takeNumber <= 0) {
    return res.status(400).json({ message: 'Take must be a positive integer' });
  }


  const selected = result.slice(0, takeNumber);
  res.status(200).json(selected);
});


app.get('/products/:id', (req, res) => {
  const { id } = req.params;

  const productId = Number(id);

  if (!Number.isInteger(productId) || productId <= 0) {
    return res.status(400).json({ message: 'Id must be a positive integer' });
  }


  const product = products.find((p) => p.id === productId);


  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.status(200).json(product);
});

app.listen(PORT, HOST, () => {
  console.log(`Сервер запущен на http://${HOST}:${PORT}`);
});
