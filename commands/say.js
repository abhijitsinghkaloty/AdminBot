module.exports = {
    name: 'say',
    description: 'says what you say',
    execute(message, args) {
        if (!args[0]) return message.reply('please specify what you want me to say!')
        if (message.member.hasPermission('ADMINISTRATOR')) {
            let argsResult;
            let channelName = message.mentions.channels.first();
            message.delete();
            if (channelName) {
                args.shift
                argsResult = args.slice(1).join(" ");
                channelName.send(argsResult);
            } else {
                args.shift
                argsResult = args.join(" ");
                message.channel.send(argsResult);
            }
        } else {
            message.reply('you cannot use this command!')
        }
    }
}

