var express = require('express');
var mongoose = require('mongoose');
var humans = require("../models/humans");
var router = express.Router();


router.post('/', (req, res) => {
    console.log("reached the router board function");
    var imgstring = req.body.leftsidestate;
    console.log("image string is " , imgstring);

    // var imgstring2 = req.body.rightsidestate;
    var imagetoBuffer = Buffer.from(imgestring, "base64");
    // var imagetoBuffer2 = Buffer.from(imgstring2, "base64");

    console.log("image to buffer is", imagetoBuffer);
    // console.log("image to buffer2 is", imagetoBuffer2);
    // console.log(imagetoBuffer.toString('base64'));


    // console.log(imagetoBuffer.toString('base64'));
    var doc = new humans.Human({ img: imagetoBuffer, imagestring: imgstring});
    doc.save();
    console.log(doc.imagestring);

});
module.exports = router;