const { model } = require("mongoose");
const schema = require("./userSchema.js");
module.exports = model("dodStormBot", schema);