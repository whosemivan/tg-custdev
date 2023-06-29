require("dotenv").config();
require("http").createServer((_, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("OK");
}).listen(10000);

const mongoose = require("mongoose");
try {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
} catch (e) {
    console.log("-- Server Error. \n" + e.message);
    process.exit(1);
}

const dodStormBot = require("./bots/dodStormBot.js");
dodStormBot.launch();

const dodmedbot = require("./bots/dodmedbot.js");
dodmedbot.launch();
