require("dotenv").config();
require("http").createServer((_, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
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

const Bot = new(require("./bot/bot.js"))();
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


const dodspbbotUsers = mongoose.model("dodspbbotUsers", schema);
const dodspbbot = Bot.create({
    botToken: process.env.BOT_dodspbbot_TOKEN,
    Users: dodspbbotUsers
});
dodspbbot.launch();

const ranhigsUsers = mongoose.model("ranhigsUsers", schema);
const ranhigsBot = Bot.create({
    botToken: process.env.BOT_ranhigsdodbot_TOKEN,
    Users: ranhigsUsers
});
ranhigsBot.launch();

const dodpedbotUsers = mongoose.model("dodpedbotUsers", schema);
const dodpedbot = Bot.create({
    botToken: process.env.BOT_dodpedbot_TOKEN,
    Users: dodpedbotUsers
});
dodpedbot.launch();

const scorecollegebotUsers = mongoose.model("scorecollegebotUsers", schema);
const scorecollegebot = Bot.create({
    botToken: process.env.BOT_scorecollegebot_TOKEN,
    Users: scorecollegebotUsers,
    startText: 'Спасибо, что заинтересовались нашим помощником в выборе колледжа и подходящей программы обучения. Пока что мы собираем базу направлений и баллов, поэтому будем рады твоему возврату сюда чуть позднее.'
});
scorecollegebot.launch();

const collegescorebotUsers = mongoose.model("collegescorebotUsers", schema);
const collegescorebot = Bot.create({
    botToken: process.env.BOT_collegescorebot_TOKEN,
    Users: collegescorebotUsers,
    startText: 'Спасибо, что заинтересовались нашим помощником в выборе колледжа и подходящей программы обучения. Пока что мы собираем базу направлений и баллов, поэтому будем рады твоему возврату сюда чуть позднее.'
});
collegescorebot.launch();

const scorecollege11botUsers = mongoose.model("scorecollege11botUsers", schema);
const scorecollege11bot = Bot.create({
    botToken: process.env.BOT_scorecollege11bot_TOKEN,
    Users: scorecollege11botUsers,
    startText: 'Спасибо, что заинтересовались нашим помощником в выборе колледжа и подходящей программы обучения. Пока что мы собираем базу направлений и баллов, поэтому будем рады твоему возврату сюда чуть позднее.'
});
scorecollege11bot.launch();

const scoremedbotUsers = mongoose.model("scoremedbotUsers", schema);
const scoremedbot = Bot.create({
    botToken: process.env.BOT_scoremedbot_TOKEN,
    Users: scoremedbotUsers,
    startText: 'Спасибо, что заинтересовались нашим помощником в выборе колледжа и подходящей программы обучения. Пока что мы собираем базу направлений и баллов, поэтому будем рады твоему возврату сюда чуть позднее.'
});
scoremedbot.launch();

const scorepolbotUsers = mongoose.model("scorepolbotUsers", schema);
const scorepolbot = Bot.create({
    botToken: process.env.BOT_scorepolbot_TOKEN,
    Users: scorepolbotUsers,
    startText: 'Спасибо, что заинтересовались нашим помощником в выборе колледжа и подходящей программы обучения. Пока что мы собираем базу направлений и баллов, поэтому будем рады твоему возврату сюда чуть позднее.'
});
scorepolbot.launch();

const scorepedbotUsers = mongoose.model("scorepedbotUsers", schema);
const scorepedbot = Bot.create({
    botToken: process.env.BOT_scorepedbot_TOKEN,
    Users: scorepedbotUsers,
    startText: 'Спасибо, что заинтересовались нашим помощником в выборе колледжа и подходящей программы обучения. Пока что мы собираем базу направлений и баллов, поэтому будем рады твоему возврату сюда чуть позднее.'
});
scorepedbot.launch();