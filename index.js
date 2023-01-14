const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = "!";

client.on('ready', () => {
    console.log(`Bot telah siap, dengan nama ${client.user.tag}!`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.reply('pong');
    } else if(command === 'prefix') {
        if(!args.length) {
            return message.channel.send(`Prefix saat ini adalah ${prefix}`);
        }
        prefix = args[0];
        message.channel.send(`Prefix telah diganti menjadi ${prefix}`);
    }
});

client.login('NzczNTgyMjM5Nzk1MTE4MTAw.GNJIFe.E-sVljdGpX_-rehkDLccmqF0nxFbOtYDMsLHk4');