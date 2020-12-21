module.exports = {
    name: 'unmute',
    description: 'Unmutes mentioned member',
    execute(message, args) {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            const mentioned = message.mentions.users.first();
            if (mentioned) {
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
                let memberMentioned = message.guild.members.cache.get(mentioned.id);

                memberMentioned.roles.remove(muteRole.id);
                message.channel.send(`<@${memberMentioned.id}> has been unmuted!`);
            } else {
                message.channel.send('Cannot find this member.');
            }
        } else {
            message.reply('you cannot use this command!');
        }
    }
}