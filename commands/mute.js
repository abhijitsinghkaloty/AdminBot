const ms = require('ms');

module.exports = {
    name: 'mute',
    description: 'Mutes mentioned member',
    execute(message, args) {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            const mentioned = message.mentions.users.first();
            if (mentioned) {
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
                let memberMentioned = message.guild.members.cache.get(mentioned.id);

                if (!args[1]) {
                    memberMentioned.roles.add(muteRole.id);
                    message.channel.send(`<@${memberMentioned.id}> has been muted!`);
                    return
                }
                memberMentioned.roles.add(muteRole.id);
                message.channel.send(`<@${memberMentioned.id}> has been muted for ${ms(ms(args[1]))}!`);

                setTimeout(function () {
                    memberMentioned.roles.remove(muteRole.id);
                }, ms(args[1]));
            } else {
                message.channel.send('Cannot find this member.');
            }
        } else {
            message.reply('you cannot use this command!');
        }
    }
}