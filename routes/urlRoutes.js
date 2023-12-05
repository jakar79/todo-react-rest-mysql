const express = require('express');
const url = express.Router();
const { createDB, createTable, createList, showList, singleRec } = require('../controllers/taskController');

//URL REST API

url.get('/create/database', createDB);
url.get('/create/table', createTable);
url.post ('/create/list', createList);
url.get ('/show/list', showList);
url.get ('/task/:id', singleRec);

module.exports = url;