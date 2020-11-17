const express = require('express');
const body = require('body-parse');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
