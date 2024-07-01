const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  user: 'user',
  host: 'localhost',
  database: 'ecommerce',
  password: 'password',
  port: 5432,
});

app.use(bodyParser.json());

app.get('/products', async (req, res) => {
  const result = await pool.query('SELECT * FROM products');
  res.json(result.rows);
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
  res.json(result.rows[0]);
});

app.post('/products', async (req, res) => {
  const { name, description, price } = req.body;
  await pool.query('INSERT INTO products (name, description, price) VALUES ($1, $2, $3)', [name, description, price]);
  res.status(201).send();
});

app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  await pool.query('UPDATE products SET name = $1, description = $2, price = $3 WHERE id = $4', [name, description, price, id]);
  res.status(200).send();
});

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM products WHERE id = $1', [id]);
  res.status(200).send();
});

app.listen(3000, () => {
  console.log('Product service listening on port 3000');
});
