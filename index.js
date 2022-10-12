const Discord = require('discord.js');
const bot = new Discord.Client();
const { token, prefix } = require('./botconfig.json');
const ms = require('ms');
const fs = require('fs');


bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

bot.on('ready', () => {
    console.log('Ready!');
    bot.user.setActivity('Admin');
})

bot.on('guildMemberAdd', guildMember => {
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');

    guildMember.roles.add(welcomeRole);
});

bot.on('guildMemberAdd', member => {
    const welcomeChannel = member.guild.channels.cache.find(ch => ch.name.includes('welcome'));
    const rulesChannel = member.guild.channels.cache.find(ch => ch.name.includes('rules'));
    const welcomeText = `Welcome to CS50, <@${member.user.id}>! Make sure you read ${rulesChannel}!`

    if (!welcomeChannel) {
        console.log('Could not find welcome channel, so I will make one!');
        member.guild.createChannel('welcome', {
            type: 'text',
            position: 0,
            topic: 'Welcome channel for new users.',
            permissionOverwrites: [{
                id: member.guild.id,
                allow: ['READ_MESSAGE_HISTORY', 'READ_MESSAGES', 'VIEW_CHANNEL'],
                deny: ['SEND_MESSAGES']
            }]
        }).then(console.log('Welcome channel created!')).catch(console.error);
    }

    if (!rulesChannel) {
        console.log('Could not find rules channel, so I will make one!');
        member.guild.createChannel('rules', {
            type: 'text',
            position: 1,
            topic: 'Rules channel for all users.',
            permissionOverwrites: [{
                id: member.guild.id,
                allow: ['READ_MESSAGE_HISTORY', 'READ_MESSAGES', 'VIEW_CHANNEL'],
                deny: ['SEND_MESSAGES']
            }]
        }).then(console.log('Rules channel created!')).catch(console.error);
    }

    Promise.resolve(welcomeText).then(function (welcomeText) {
        welcomeChannel.send(welcomeText)
    })
})

bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there is an issue with this command.');
    }
})


bot.login(token);
