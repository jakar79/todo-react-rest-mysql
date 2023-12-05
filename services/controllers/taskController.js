const req = require('express/lib/request');
const db = require('../db/database');
const res = require('express/lib/response');

//CREATE database

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

//SHOW LIST

exports.showList = (req, res) => {
    const qry = 'SELECT * FROM tasks';

    db.query(qry, (err, result) => {
        if (err) return res.json(err);
        return res.status(200).json(result);
    });
};

//SHOW SINGLE RECORDING

exports.singleRec = (req, res) => {
    const qry = `SELECT * FROM tasks WHERE id=${req.params.id}`;

    db.query(qry, (err, result) => {
        if(err) return res.json(err);
        return res.status(200).json(result[0]);
    });
};

//UPDATE RECORDING

exports.updateRec = (req, res) => {
    const { todo, priority} = req.body;

    const qry = `UPDATE tasks SET ? WHERE id=${req.params.id}`;

    db.query(qry, {todo, priority}, (err, result) => {
        if(err) return res.json(err);
        return res.status(200).json(result);
    });
};

//DELETE RECORDING

exports.deleteRec = (req, res) => {

    const qry = `DELETE FROM tasks WHERE id=${req.params.id}`;

    db.query(qry, (err, result) => {
        if(err) return res.json(err);
        return res.status(200).json({data: " task deleted"});
    });
}