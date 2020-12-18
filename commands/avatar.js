const Discord = require('discord.js');

module.exports = {
    name: "av",
    description: "Displays someone's avatar",
    execute(message, args) {
        let user = message.mentions.users.first() || message.author;
        let embed = new Discord.MessageEmbed()
            .setTitle(`${user.username}'s avatar:`)
            .setImage(user.displayAvatarURL({ format:'png' }))
            .setColor('#FF4500')
            .setTimestamp()
        message.channel.send(embed)
    }
}
