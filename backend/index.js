const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

mongoose.connect(`mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_INITDB_DATABASE}`,
    { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('combined'));
app.use(cors('*'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.BACKEND_PORT || 3001;
const server = http.createServer(app);
server.listen(port);
console.log('Server Listening on: ', port);