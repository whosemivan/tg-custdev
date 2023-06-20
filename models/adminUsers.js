const { Schema, model } = require("mongoose");

const schema = new Schema({
    "adminUserId": {
        type: String,
        require: true
    }
}, { versionKey: false })
const AdminUser = model("AdminUser", schema);

module.exports = AdminUser;