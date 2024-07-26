const express = require('express');
const app = express();
const port_no = process.env.PORT || 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

if (!module.parent) {
  app.listen(port_no, () => {
    console.log(`API available on localhost port ${port_no}`);
  });
}

module.exports = app;
