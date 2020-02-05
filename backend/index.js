const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors');

mongoose.connect(`mongodb://${process.env.MONGO_DB}:auth/auth`,
    { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3001;
const server = http.createServer(app);
server.listen(port);
console.log('Server Listening on: ', port);