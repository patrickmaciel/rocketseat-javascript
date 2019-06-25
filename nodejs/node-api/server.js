const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Olopa á');
});

app.listen(3001);
