module.exports = {
    name: 'purge',
    description: 'Delete a certain number of messages from a channel.',
    execute(message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you do not have permission to use this command.");
        const amount = parseInt(args[0]) + 1;
        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('you need to input a number between 1 and 99.');
        }

        message.channel.bulkDelete(amount, true)
            .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` messages.`))
            .catch(err => message.reply(`something went wrong... ${err}`));
    },
};
