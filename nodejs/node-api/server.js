const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// start app
const app = express();

// start mongodb database
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

requireDir('./src/models');

// router
app.use('/api', require('./src/routes'));

app.listen(3001);
