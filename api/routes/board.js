const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Board = require('../models/humans');

const boardRouter = express.Router();

boardRouter.use(bodyParser.json());

boardRouter.route('/')
.get((req,res,next) => {
    Board.find({})
    .then((images) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(images);
    }, (err) => next(err))
    .catch((err) => next(err));
})

module.exports = Board;