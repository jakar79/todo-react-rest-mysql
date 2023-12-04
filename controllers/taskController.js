const db = require('../db/database');

//CREATE DB

exports.createDB = (req, res) => {
    let qry = 'CREATE DATABASE taskslist';
    db.query(qry, (error, result) => {
        if (error) throw error;
        return res.status(201).json("db Created");
    })
};

//CREATE TABLE

exports.createTable = (req, res) => {
    let qry = 'CREATE TABLE tasks(id int AUTO_INCREMENT, todo VARCHAR(255), priority VARCHAR(255), PRIMARY KEY(id))';
    db.query(qry,(error, result) => {
        if(error) throw error;
        return res.status(201).json("TABLE CREATED");
    });
};

//CREATE LIST

exports.createList = (req, res) => {
    let qry = 'INSERT INTO tasks SET ?';

    const {todo, priority } = req.body;

    db.query(qry, {todo, priority}, (err, result) => {
        if(err) return res.json(err);
        return res.status(200).json(result);
    });
};

//SHOW TASKS

exports.showTasks = (req, res) => {
    const qry = 'SELECT * FROM tasks';

    db.query(qry, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result);
    });
}