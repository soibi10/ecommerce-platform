const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'ecommerce'
});

connection.connect();

app.use(bodyParser.json());

app.get('/orders/:userId', (req, res) => {
  const { userId } = req.params;
  connection.query('SELECT * FROM orders WHERE user_id = ?', [userId], (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.post('/orders', (req, res) => {
  const order = req.body;
  connection.query('INSERT INTO orders SET ?', order, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send();
    }
  });
});

app.put('/orders/:orderId', (req, res) => {
  const { orderId } = req.params;
  const order = req.body;
  connection.query('UPDATE orders SET ? WHERE id = ?', [order, orderId], (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send();
    }
  });
});

app.delete('/orders/:orderId', (req, res) => {
  const { orderId } = req.params;
  connection.query('DELETE FROM orders WHERE id = ?', [orderId], (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send();
    }
  });
});

app.listen(3002, () => {
  console.log('Order service listening on port 3002');
});
