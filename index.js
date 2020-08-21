const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzM4NDQxODI4MTg1MDE0MzUz.XyL9iw.E2Mh4JPoR2pVK0VKYBPJcV4tkaU';

const PREFIX = '.';

bot.on('ready', () => {
    console.log('Ready!');
    bot.user.setActivity('CS50!');
})

bot.on('guildMemberAdd', member => {
    const welcomeChannel = member.guild.channels.cache.find(ch => ch.name.includes('welcome-and-goodbye'));
    const rulesChannel = member.guild.channels.cache.find(ch => ch.name.includes('rules'));
    const welcomeText = `Welcome to CS50, <@${member.user.id}>! Make sure you read ${rulesChannel}!`

    if(!welcomeChannel) {
        console.log('Could not find welcome channel, so I will make one!');
        member.guild.createChannel('welcome-and-goodbye',{
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

    if(!rulesChannel) {
        console.log('Could not find rules channel, so I will make one!');
        member.guild.createChannel('rules',{
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

    Promise.resolve(welcomeText).then(function (welcomeText){
        welcomeChannel.send(welcomeText)
    })
})

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {

        case 'welcome':
            if (message.mentions.members.first()) {
                message.channel.send('Welcome to CS50, ' + message.mentions.members.first().toString());
            } else {
                message.channel.send('Welcome to CS50!')
            }
            break;
        case 'hello':
            message.channel.send('Hello, world!')
            break;
        case 'ping':
            var ping = Date.now() - message.createdTimestamp + " ms";

            if (message.content.startsWith(PREFIX + "ping")) {

                var ping = Date.now() - message.createdTimestamp + " ms";
                message.channel.send("Pong! Your ping is `" + `${Date.now() - message.createdTimestamp}` + " ms`.");
            }
            break;
        case 'av':
            if (message.mentions.users.size) {
                let member = message.mentions.users.first()
                if (member) {
                    const emb = new Discord.MessageEmbed().setImage(member.displayAvatarURL()).setColor(15844367).setTitle(`${member.username}'s avatar:`)
                    message.channel.send(emb);

                }
                else {
                    message.channel.send("Sorry none found with that name")

                }
            } else {
                const emb = new Discord.MessageEmbed().setImage(message.author.displayAvatarURL()).setColor(15844367).setTitle(`${message.author.username}'s avatar:`)
                message.channel.send(emb);
            }
            break;
        case 'clear':
            if (message.member.hasPermission('ADMINISTRATOR')){
                if (!args[1]) return message.reply('please specify the number of messages to purge.')
                message.channel.bulkDelete(args[1]);
            } else {
                message.reply('you cannot use this command!')
            }
            break;
        case 'kick':
            if (message.member.hasPermission('KICK_MEMBERS')){
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
            break;
        case 'ban':
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
            break;
    }
})

bot.login(token);