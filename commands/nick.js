const Discord = require('discord.js');

module.exports = {
    name: 'nick',
    description: 'Changes a members nickname',
    execute(message, args) {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            const member = message.mentions.members.first();
            if (!member) return message.channel.send('Please mention a member!');
            if (!args[1]) return message.channel.send('Please specify the nickname you want to set!');
            member.setNickname(args.slice(1).join(" ")), message.channel.send(`Successfully set ${member}'s nickname to ${args.slice(1).join(" ")}`);
        } else {
            message.reply('you cannot use this command!');
        }
    }
}