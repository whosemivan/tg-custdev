const {
    Telegraf,
    Telegram
} = require('telegraf');
const saveUser = require("../helpers/onStart.js");
const getUsers = require("../helpers/onMsg.js");

class Bot {
    constructor() {
        this.usersList = {};
    }

    create({ botToken, Users, startText='Спасибо, что заинтересовались нашим помощником в выборе колледжа. Пока что мы собираем базу ДОДов, поэтому будем рады твоему возврату сюда чуть позднее!', msgText='К сожалению, бот находится в разработке!' }) {
        const bot = new Telegraf(botToken);
        const telegram = new Telegram(botToken);
        telegram.getMe().then((data) => {
            this.usersList[data.username] = Users;
        });

        bot.start((ctx) => {
            ctx.reply(startText);
        
            const userId = ctx.from.id;
            saveUser(Users, userId);
        });
        
        bot.on('message', (ctx) => {
            const userId = ctx.from.id;
            const text = ctx.message.text;
        
            getUsers(userId, text, this.usersList).then((text) => {
                if (text) return ctx.reply(text);
                ctx.reply(msgText);
            });
        });

        return bot;
    }
}

module.exports = Bot;