async function saveUser(Users, userId) {
    const candidate = await Users.findOne({
        userId
    }).exec();
    if (candidate) return;

    const user = new Users({
        userId
    });
    await user.save();
}

module.exports = saveUser;