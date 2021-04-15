var express = require('express');
var mongoose = require('mongoose');
var humans = require("../models/humans");
var router = express.Router();


router.post('/', (req, res) => {
    console.log("reached the router board function");
    var imgstring = req.body.selectedFile;
    var imagetoBuffer = Buffer.from(imagestring, "base64");
    console.log(imagetoBuffer.toString('base64'));
    var doc = new humans.Human({ img: imagetoBuffer, imagestring: imgstring});
    doc.save();
    console.log(doc.imagestring);

});
module.exports = router;