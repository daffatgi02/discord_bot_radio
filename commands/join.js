module.exports = {
    name: 'join',
    description: 'Make the bot join a voice channel.',
    execute(message, args) {
        if (!message.member.voice.channel) {
            return message.reply("you need to be in a voice channel to use this command.");
        }
        const channel = message.member.voice.channel;
        channel.join()
            .then(connection => {
                message.reply(`Successfully joined ${channel}`);
                // you can do something with the connection object
            })
            .catch(err => message.reply(`I couldn't join the channel: ${err}`));
    },
};
