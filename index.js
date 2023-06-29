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

const Bot = new (require("./bot/bot.js"))();
const schema = require("./scheme/userSchema.js");


// Боты:

const dodStormBotUsers = mongoose.model("dodStormBotUsers", schema);
const dodStormBot = Bot.create({
    botToken: process.env.BOT_dodStormBot_TOKEN,
    Users: dodStormBotUsers,
    // startText - текст, который будет отправляться при нажатии на кнопку start.
    // msgText - текст, который будет отправляться при отправке сообщения.
    // По умолчанию они заданы как у первого бота.
});
dodStormBot.launch();

const dodmedbotUsers = mongoose.model("dodmedbotUsers", schema);
const dodmedbot = Bot.create({
    botToken: process.env.BOT_dodmedbot_TOKEN,
    Users: dodmedbotUsers
});
dodmedbot.launch();
