const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzM4NDQxODI4MTg1MDE0MzUz.XyL9iw.E2Mh4JPoR2pVK0VKYBPJcV4tkaU';

const PREFIX = '.';

bot.on('ready', () =>{
    console.log('Ready!');
    bot.user.setActivity('CS50!');
})

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome-and-goodbye');
    if (!channel) return;
    channel.send(`Welcome to CS50, ${member}`);
});

bot.on('message', message=>{    

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){

        case 'welcome':
            if(message.mentions.members.first()){
                message.channel.send('Welcome to CS50, '+message.mentions.members.first().toString());
            }else{
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
            if(message.mentions.users.size){
                let member = message.mentions.users.first()
            if(member){
                const emb = new Discord.MessageEmbed().setImage(member.displayAvatarURL()).setColor(15844367).setTitle(`${member.username}'s avatar:`)
                message.channel.send(emb);
                
            }
            else{
                message.channel.send("Sorry none found with that name")
    
            }
            }else{
                const emb = new Discord.MessageEmbed().setImage(message.author.displayAvatarURL()).setColor(15844367).setTitle(`${message.author.username}'s avatar:`)
                message.channel.send(emb);
            }
            break;
        case 'clear':
            if(!args[1]) return message.reply('please specify the number of messages to purge.')
            message.channel.bulkDelete(args[1]);
            break;
    }
})

bot.login(token);