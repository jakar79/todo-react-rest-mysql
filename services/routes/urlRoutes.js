const express = require('express');
const url = express.Router();
const { createDB, createTable, insertLine, showList, singleTask, updateTask, deleteTask } = require('../controllers/taskController');

//URL REST API

url.get('/create/database', createDB);// #GET://localhost:8000/api/create/database
url.get('/create/table', createTable);// #GET:http://localhost:8000/api/create/table
url.post ('/insert/line', insertLine);// #POST:http://localhost:8000/api/insert/line ex:<<{"todo": "buy Bananas","priority": "Medium"}>>
url.get ('/show/list', showList);     // #GET:http://localhost:8000/api/show/list
url.get ('/task/:id', singleTask);     // #GET:http://localhost:8000/api/task/3
url.put ('/update/task/:id', updateTask);//PUT:http://localhost:8000/api/update/task/2 ex:<<{"id": 2,"todo": "call my mother","priority": "High"}>>
url.delete ('/delete/task/:id', deleteTask);//DELETE:http://localhost:8000/api/delete/task/2

module.exports = url;