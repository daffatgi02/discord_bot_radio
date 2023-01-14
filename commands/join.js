const { prefix } = require('../config.json');
const Eris = require('eris');
const player = require('eris-player');

module.exports = {
    name: 'join',
    description: 'Join a voice channel and play radio',
    execute(message) {
        if (!message.content.startsWith(prefix + 'join')) return;

        if (!message.member.voice.channel) {
            return message.reply('You need to be in a voice channel to use this command.');
        }

        const connection = message.member.voice.channel.join();
        const radioUrl = 'https://23743.live.streamtheworld.com/PRAMBORS_FM.mp3';
        const stream = player.play(connection, radioUrl);

        stream.on('finish', () => {
            connection.disconnect();
        });
    },
};
