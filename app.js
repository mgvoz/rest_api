const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(bodyParser.json());

//IMPORT ROUTES, USE MIDDLEWARE
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);
app.use(cors());

//CONNECT DB
mongoose.connect(
	process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => console.log('connected to db'),
);

app.listen(3000);
