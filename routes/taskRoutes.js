const express = require('express');
const router = express.Router();
const { createDB, createTable, createList, showTasks } = require('../controllers/taskController');

//ROUTES REST API

router.get('/create/database', createDB);
router.get('/create/table', createTable);
router.post ('/create/list', createList);
router.get ('/show/tasks', showTasks);

module.exports = router;