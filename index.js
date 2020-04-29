//following tutorial at: https://scotch.io/tutorials/authenticate-a-node-es6-api-with-json-web-tokens#toc-developing-the-user-model

require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const environment = process.env.NODE_ENV;
const stage = require('./config')[environment];
const routes = require('./routes/index.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

if(environment !== "production") {
  app.use(logger('dev'))
}

app.use('/api/v1', routes(router));

app.listen(`${stage.port}`, () =>{
  console.log(`server listening at ${stage.port}`)
})