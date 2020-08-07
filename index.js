const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzM4NDQxODI4MTg1MDE0MzUz.XyL9iw.E2Mh4JPoR2pVK0VKYBPJcV4tkaU';

const PREFIX = '.';

bot.on('ready', () =>{
    console.log('Ready!');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'welcome':
            if(message.mentions.members.first() && args[1] === message.mentions.members.first().toString()){
                message.channel.send('Welcome to CS50, '+message.mentions.members.first().toString());
            }else{
                message.channel.send('Welcome to CS50!')
            }
            break;
        case 'hello':
            message.channel.send('Hello, world!')
            break;
        case 'clear':
            if(!args[1]) return message.reply('please specify the number of messages to purge.')
            message.channel.bulkDelete(args[1]);
            break;
    }
})

bot.login(token);