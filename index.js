const Discord = require('discord.js');
const client = new Discord.Client({
    ws: {
        intents: Discord.Intents.ALL
    }
});
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    client.on(event.name, event.execute.bind(null, client));
}

client.login(token);


client.login('NzczNTgyMjM5Nzk1MTE4MTAw.GNJIFe.E-sVljdGpX_-rehkDLccmqF0nxFbOtYDMsLHk4');