module.exports = {
    name: 'kick',
    description: 'kicks mentionned user',
    execute(message, args) {
        if (message.member.hasPermission('KICK_MEMBERS')) {
            const userKick = message.mentions.users.first();
            if (userKick) {
                var member = message.guild.member(userKick);
                if (member) {
                    member.kick('You went against the rules!').then(() => {
                        message.reply(`${userKick.tag} was kicked from the server!`);
                    }).catch(err => {
                        message.reply('I was unable to kick that user!')
                        console.log(err);
                    })
                } else {
                    message.reply('That user is not in the guild!')
                }
            } else {
                message.reply('you need to specify a user!')
            }
        } else {
            message.reply('you cannot use this command!')
        }
    }
}