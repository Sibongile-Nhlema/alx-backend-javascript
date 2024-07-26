const express = require('express');
const app = express();
const port_no = 7865;

// Existing endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// New endpoint
app.get('/cart/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!isNaN(id)) {
    res.send(`Payment methods for cart ${id}`);
  } else {
    res.status(404).send('Not Found');
  }
});

if (require.main === module) {
  app.listen(port_no, () => {
    console.log(`API available on localhost port ${port_no}`);
  });
}

module.exports = app;
