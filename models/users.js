const { Schema, model } = require("mongoose");

const schema = new Schema({
    "userId": {
        type: String,
        require: true
    }
}, { versionKey: false })
const User = model("User", schema);

module.exports = User; 