const express = require('express');
const url = express.Router();
const { createDB, createTable, createList, showList, singleRec, updateRec, deleteRec } = require('../controllers/taskController');

//URL REST API

url.get('/create/database', createDB);// #GET://localhost:8000/api/create/database
url.get('/create/table', createTable);// #GET:http://localhost:8000/api/create/table
url.post ('/create/list', createList);// #POST:http://localhost:8000/api/create/list ex:<<{"todo": "buy Bananas","priority": "Medium"}>>
url.get ('/show/list', showList);     // #GET:http://localhost:8000/api/show/list
url.get ('/task/:id', singleRec);     // #GET:http://localhost:8000/api/task/3
url.put ('/update/rec/:id', updateRec);//PUT:http://localhost:8000/api/update/rec/2 ex:<<{"id": 2,"todo": "call my mother","priority": "High"}>>
url.delete ('/delete/rec/:id', deleteRec);//DELETE:http://localhost:8000/api/delete/rec/2

module.exports = url;