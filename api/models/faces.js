var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var humanSchema = new Schema(
    {
        //base64 img is converted to Binary to store in MOGNODB
        images: {
            img: Buffer,
            imagestring: String
        }
        
    }, {
    timestamp:true,
    collection: 'faces'
});

function getHumanModel() {
    if (mongoose.models && mongoose.models.faces) {
        return mongoose.models.faces;
    }
    return mongoose.model('faces', humanSchema, 'faces');
}
// var Human = mongoose.model('Humans', humanschema);
// module.exports = { Human };
module.exports = getHumanModel();
