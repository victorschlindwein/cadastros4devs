const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const requireDir = require('require-dir');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27019/4devs", { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3003);