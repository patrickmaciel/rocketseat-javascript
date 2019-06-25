const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// start app
const app = express();

// start mongodb database
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

requireDir('./src/models');

const Product = mongoose.model('Product');

// first route
app.get('/', (req, res) => {
  Product.create({
    title: 'React',
    description: 'Build native apps',
    url: 'https://github.com/facebook/react-native'
  });

  return res.send('Estudar é bom');
});

app.listen(3001);
