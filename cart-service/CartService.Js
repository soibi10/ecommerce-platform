const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');

const app = express();
const client = redis.createClient();

app.use(bodyParser.json());

app.get('/carts/:userId', (req, res) => {
  const { userId } = req.params;
  client.hgetall(`cart:${userId}`, (err, cart) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(cart);
    }
  });
});

app.post('/carts/:userId/items', (req, res) => {
  const { userId } = req.params;
  const item = req.body;
  client.hset(`cart:${userId}`, item.id, JSON.stringify(item), (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send();
    }
  });
});

app.put('/carts/:userId/items/:itemId', (req, res) => {
  const { userId, itemId } = req.params;
  const item = req.body;
  client.hset(`cart:${userId}`, itemId, JSON.stringify(item), (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send();
    }
  });
});

app.delete('/carts/:userId/items/:itemId', (req, res) => {
  const { userId, itemId } = req.params;
  client.hdel(`cart:${userId}`, itemId, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send();
    }
  });
});

app.listen(3001, () => {
  console.log('Cart service listening on port 3001');
});
