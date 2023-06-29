const {
    Telegraf
} = require('telegraf');
const saveUser = require("../helpers/onStart.js");
const getUsers = require("../helpers/onMsg.js");
const Users = require("../models/dodStormBot.js");

const bot = new Telegraf(process.env.BOT_dodStormBot_TOKEN);

bot.start((ctx) => {
    ctx.reply('Спасибо, что заинтересовались нашим помощником в выборе колледжа. Пока что мы собираем базу ДОДов, поэтому будем рады твоему возврату сюда чуть позднее!');

    const userId = ctx.from.id;
    saveUser(Users, userId);
});

bot.on('message', (ctx) => {
    const userId = ctx.from.id;
    const text = ctx.message.text;
    
    getUsers(userId, text).then((text) => {
        if (text) return ctx.reply(text);
        ctx.reply('К сожалению, бот находится в разработке!');
    });
});

module.exports = bot;