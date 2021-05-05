var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var facesSchema = new Schema(
    {
    //base64 img is converted to Binary to store in MOGNODB
    img: Buffer,
    imagestring: String,
    img2: Buffer,
    imagestring2: String    
    }
);

var Faces = mongoose.model('Faces', facesSchema);
module.exports = { Faces };

