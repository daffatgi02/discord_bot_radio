const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login('NzczNTgyMjM5Nzk1MTE4MTAw.GNJIFe.E-sVljdGpX_-rehkDLccmqF0nxFbOtYDMsLHk4');