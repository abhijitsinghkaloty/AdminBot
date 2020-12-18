module.exports = {
    name: 'ban',
    description: 'bans mentionned user',
    execute(message, args) {
        if (message.member.hasPermission('BAN_MEMBERS')) {
            const userBan = message.mentions.users.first();
            if (userBan) {
                var member = message.guild.member(userBan);
                if (member) {
                    member.ban({
                        reason: 'You went against the rules!'
                    }).then(() => {
                        message.reply(`${userBan.tag} was banned from the server!`)
                    })
                } else {
                    message.reply('That user is not in the guild!');
                }
            } else {
                message.reply('you need to specify a person!')
            }
        } else {
            message.reply('you cannot use this command!')
        }
    }
}