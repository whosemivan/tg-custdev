const AdminUser = require("../models/adminUsers.js");
const dodStormBotUsers = require("../models/dodStormBot.js");
const dodmedbot = require("../models/dodmedbot.js");

async function getUsers(userId, text) {
    const candidate = await AdminUser.find({
        userId
    }).exec();

    if (text == "info" && candidate.length) {
        const usersList =  {
            "@dodStormBot": await dodStormBotUsers.count().exec(),
            "@dodmedbot": await dodmedbot.count().exec(),
        }
        const sumUsers = Object.values(usersList).reduce((a, b) => a + b, 0);

        let coolText = "";
        for (const [key, value] of Object.entries(usersList)) {
            coolText += (`Пользователей в ${key}: ${value}\n`);
        }

        coolText += (`\nВсего пользьзователей: ${sumUsers}`);

        return coolText;
    }
}

module.exports = getUsers;