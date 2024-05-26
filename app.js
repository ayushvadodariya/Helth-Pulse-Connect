require('dotenv').config();
const cors = require('cors');

const express = require("express");
const http = require("http");

const userRouterV1 = require('./routes/userRouteV1');
const childRouterV1 = require('./routes/childRouteV1');

const { checkForAuthenticationToken } = require('./middlewares/authentication');
const { connectMongoDb } = require('./connection');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

// Connection 
connectMongoDb(process.env.MONGO_CONNECTION_URL)
  .then((e) => console.log("Mongodb connected"));

app.use(cors());
app.use(express.json());

app.use('/api/v1/user', checkForAuthenticationToken(), userRouterV1);
app.use('/api/v1/child', childRouterV1);



server.listen(PORT, () => console.log(`server started at https://helth-pulse-connect.onrender.com`));