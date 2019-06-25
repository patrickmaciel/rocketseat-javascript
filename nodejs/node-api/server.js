const express = require('express');
const mongoose = require('mongoose');

// start app
const app = express();

// start mongodb database
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

// first route
app.get('/', (req, res) => {
  res.send('Estudar é bom');
});

app.listen(3001);
