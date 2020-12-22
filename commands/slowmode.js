module.exports = {
    name: 'slowmode',
    description: 'Puts channel on slowmode',
    async execute(message, args) {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            if (!args[0]) return message.reply('please specify the time you want to set on the slowmode!');
            if (args[0] === 'none') {
                await message.channel.setRateLimitPerUser(0);
                return message.channel.send(`Set slowmode to 0 seconds.`);
            };
            if (isNaN(args[0])) return message.reply('Please use a number.');
            const setTime = Number(args[0]);

            if (setTime === 5) {
                await message.channel.setRateLimitPerUser(setTime);
                return message.channel.send(`Set slowmode to ${setTime} seconds.`);
            };
            if (setTime === 10) {
                await message.channel.setRateLimitPerUser(setTime);
                return message.channel.send(`Set slowmode to ${setTime} seconds.`);
            };
            if (setTime === 15) {
                await message.channel.setRateLimitPerUser(setTime);
                return message.channel.send(`Set slowmode to ${setTime} seconds.`);
            };
            if (setTime === 30) {
                await message.channel.setRateLimitPerUser(setTime);
                return message.channel.send(`Set slowmode to ${setTime} seconds.`);
            };
            if (setTime === 60) {
                await message.channel.setRateLimitPerUser(setTime);
                return message.channel.send(`Set slowmode to ${setTime} seconds.`);
            };
            if (setTime === 120) {
                await message.channel.setRateLimitPerUser(setTime);
                return message.channel.send(`Set slowmode to ${setTime} seconds.`);
            };
            if (setTime === 300) {
                await message.channel.setRateLimitPerUser(setTime);
                return message.channel.send(`Set slowmode to ${setTime} seconds.`);
            };
            if (setTime === 600) {
                await message.channel.setRateLimitPerUser(setTime);
                return message.channel.send(`Set slowmode to ${setTime} seconds.`);
            };
            if (setTime === 900) {
                await message.channel.setRateLimitPerUser(setTime);
                return message.channel.send(`Set slowmode to ${setTime} seconds.`);
            };
            if (setTime === 1800) {
                await message.channel.setRateLimitPerUser(setTime);
                return message.channel.send(`Set slowmode to ${setTime} seconds.`);
            };
            if (setTime === 3600) {
                await message.channel.setRateLimitPerUser(setTime);
                return message.channel.send(`Set slowmode to ${setTime} seconds.`);
            };
            if (setTime === 7200) {
                await message.channel.setRateLimitPerUser(setTime);
                return message.channel.send(`Set slowmode to ${setTime} seconds.`);
            };
            if (setTime === 21600) {
                await message.channel.setRateLimitPerUser(setTime);
                return message.channel.send(`Set slowmode to ${setTime} seconds.`);
            };

            message.channel.send(`Invalid time in seconds. Options: \`none, 5, 10, 15, 30, 60, 120, 300, 600, 900, 1800, 3600, 7200 and 21600\``);
        } else {
            message.reply('you cannot use this command!');
        }
    }
}