const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// start app
const app = express();
app.use(express.json());
app.use(cors());

// start mongodb database
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

requireDir('./src/models');

// router
app.use('/api', require('./src/routes'));

app.listen(3001);
