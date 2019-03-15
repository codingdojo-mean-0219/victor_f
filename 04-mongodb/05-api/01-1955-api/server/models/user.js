const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {type: String, required: [true], minlength:3},
   }, {timestamps: true})

mongoose.model('User', UserSchema);
