module.exports = {
    name: 'ping',
    description: 'Shows users ping.',
    execute(message, args) {
       message.channel.send('Finding bots ping...').then(msg => {
           const ping = msg.createdTimestamp - message.createdTimestamp;
           msg.edit(`Cs50 bot's ping is ${ping}ms`);
       })
    }
}