const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const catRoutes = require('./controllers/cats')
// const ownerRoutes = require('./controllers/owners')

// actual file path of api, name the route with whatever
// so the root of your website is at localhost:portNo/cats
server.use('/cats', catRoutes)
// server.use('/owners', ownerRoutes)

const port = process.env.PORT || 3000;

// Root route when localhost:portNo
server.get('/', (req, res) => res.send('Hello, world!'))

module.exports = server
