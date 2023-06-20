const {
    Telegraf
} = require('telegraf');
const fs = require('fs');

require('dotenv').config();

const data = fs.readFileSync('data.json');
const users = JSON.parse(data).users;

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    const userId = ctx.from.id;

    ctx.reply('Привет! С помощью нашего бота ты сможешь узнать обо всех днях отрытых дверей в учебных заведениях твоего города!');

    if (users.includes(userId)) {
        return;
    }

    users.push(userId);

    const newData = JSON.parse(data);
    newData.users = users;
    newData.usersCount = users.length;
    console.log(newData);

    fs.writeFile('data.json', JSON.stringify(newData), err => {
        // error checking
        if (err) throw err;

        console.log("New user added");
    });
});

bot.on('message', (ctx) => {
    ctx.reply('К сожалению, бот находится в разработке!');
});

bot.launch();