module.exports = {
    name: 'join',
    description: 'Buat menjadi bot bisa join voice',
    execute(message, args) {
        if (!message.member.voice.channel) {
            return message.reply("Kamu harus berada di voice channel!");
        }
        const channel = message.member.voice.channel;
        channel.join()
            .then(connection => {
                message.reply(`Bot Telah join ${channel}`);
                // you can do something with the connection object
            })
            .catch(err => message.reply(`Bot error tidak bisa join: ${err}`));
    },
};
