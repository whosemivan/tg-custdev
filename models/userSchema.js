const { Schema } = require("mongoose");

const userSchema = new Schema({
    "userId": {
        type: String,
        require: true
    }
}, { versionKey: false })

module.exports = userSchema; 
