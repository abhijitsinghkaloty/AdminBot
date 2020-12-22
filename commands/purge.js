module.exports = {
    name: 'purge',
    description: 'deletes messages',
    async execute(message, args) {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            const args = message.content.split(' ').slice(1); 
            const amount = args.join(' '); 

            if (!amount) return message.reply('specify the amount of messages you want me to purge in numbers!'); 
            if (isNaN(amount)) return message.reply('specify the amount of messages you want me to purge in numbers!'); 

            if (amount > 100) return message.reply('you cannot delete more than 100 messages at once!'); 
            if (amount < 1) return message.reply('you have to delete at least 1 message!'); 

            await message.channel.messages.fetch({ limit: amount }).then(messages => { 
            message.channel.bulkDelete(messages 
        )});
        } else {
            message.reply('you cannot use this command!');
        }

    }
}