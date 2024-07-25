const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New endpoint with regex validation for numeric :id
app.get('/cart/:id(\\d+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
