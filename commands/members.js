const Discord = require('discord.js');

module.exports = {
    name: 'members',
    description: 'Members in the server',
    execute(message, args) {
        let memberEmbed = new Discord.MessageEmbed()
            .setTitle(`**${message.guild.name}** has ${message.guild.memberCount} members!`)
            .setColor("RANDOM")
            .setFooter(`Requested by ${message.author.username}`)
            .setTimestamp();

        message.channel.send(memberEmbed);
    }
}