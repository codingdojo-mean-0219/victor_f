var mongoose = require('mongoose');

var CatSchema = new mongoose.Schema({
    name: { type: String, required:true, minlength: 1},
    description: { type: String, required: true, minlength: 1}
}, {timestamps: true});

var Cat = mongoose.model('Cat', CatSchema);
module.exports = Cat;