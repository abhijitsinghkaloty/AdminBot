const Discord = require('discord.js');

module.exports = {
    name: 'whois',
    description: 'Gives user-info',
    execute(message, args) {
        const { guild } = message;
        let user = message.mentions.users.first() || message.author;
        let member = guild.members.cache.get(user.id);

        let userEmbed = new Discord.MessageEmbed()
            .setTitle(`User info for ${user.username}`)
            .setThumbnail(user.displayAvatarURL({ format:'png' }))
            .addField("Nickname:", `${member.nickname}`)
            .addField("User ID:", `${user.id}`)
            .addField("Account created:", `${user.createdAt}`)
            .addField("Joined server:", `${member.joinedAt}`)
            .addField("User status:", `${user.presence.status}`)
            .addField("Role count:", `${member.roles.cache.size - 1}`)
            .setColor('#FF4500')
            .setFooter(`Requested by ${message.author.username}`)
            .setTimestamp()
        message.channel.send(userEmbed)
    }
}