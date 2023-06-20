const {
    Telegraf
} = require('telegraf');
const mongoose = require("mongoose");
const User = require("./models/users.js");
const AdminUser = require("./models/adminUsers.js");

require('dotenv').config();

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

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start(async (ctx) => {
    const userId = ctx.from.id;

    ctx.reply('Привет! С помощью нашего бота ты сможешь узнать обо всех днях отрытых дверей в учебных заведениях твоего города!');

    const candidate = await User.findOne({
        "userId": userId
    }).exec();
    console.log(candidate)
    if (candidate) return;

    const user = new User({
        userId
    });
    await user.save();
});

bot.on('message', async (ctx) => {
    const userId = ctx.from.id;
    const candidate = await AdminUser.find({
        userId
    }).exec();

    if (ctx.message.text == "info" && candidate.length) {
        const usersCount = await User.count().exec();
        return ctx.reply(`Количество пользователей: ${usersCount}`);
    }

    ctx.reply('К сожалению, бот находится в разработке!');
});

bot.launch();