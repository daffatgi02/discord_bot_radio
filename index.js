const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Bot telah siap, dengan nama ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});

client.login('NzczNTgyMjM5Nzk1MTE4MTAw.GNJIFe.E-sVljdGpX_-rehkDLccmqF0nxFbOtYDMsLHk4');