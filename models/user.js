const { Schema, model } = require('mongoose');

const ModelSchema = new Schema({
    first_name: String,
    last_name: String,
    password: String,
    email: String,
    image:String,
    phone: Number,
    about: String,
    github: String,
    linkedin:String } );

const User = model('User', ModelSchema);
module.exports = User;