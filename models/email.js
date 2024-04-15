const mongoose = require('mongoose')
//creating schema
const Schema = mongoose.Schema;
//creating email schema
const emailSchema = new Schema({
    email : {
        type : String,
        required : true,
        unique : true
    }
})

//creating model
const Email = mongoose.model('List', emailSchema);
//exporting model
module.exports = Email;