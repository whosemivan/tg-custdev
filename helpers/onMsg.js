const AdminUser = require("../scheme/adminUsers.js");

async function getUsers(userId, text, users) {
    const candidate = await AdminUser.find({
        userId
    }).exec();

    if (text == "info" && candidate.length) {
        const usersList =  {}
        for (const [key, value] of Object.entries(users)) {
            usersList["@"+key] = await value.count().exec();
        }

        let coolText = "";
        for (const [key, value] of Object.entries(usersList)) {
            coolText += (`Пользователей в ${key}: ${value}\n`);
        }

        const sumUsers = Object.values(usersList).reduce((a, b) => a + b, 0);
        coolText += (`\nВсего пользьзователей: ${sumUsers}`);

        return coolText;
    }
}

module.exports = getUsers;