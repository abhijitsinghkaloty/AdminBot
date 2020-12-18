module.exports = {
    name: 'welcome',
    description: 'welcomes people',
    execute(message, args) {
        if (message.mentions.members.first()) {
            message.channel.send('Welcome to CS50, ' + message.mentions.members.first().toString());
        } else {
            message.channel.send('Welcome to CS50!')
        }
    }
}