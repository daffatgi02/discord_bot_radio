// example event file: message.js
module.exports = {
    name: 'message',
    execute(client, message) {
        if (!message.content.startsWith(prefix) || message.author.bot) return;

        const args = message.content.slice(prefix.length).split(/ +/);
        const commandName = args.shift().toLowerCase();

        if (!client.commands.has(commandName)) return;

        const command = client.commands.get(commandName);

        try {
            command.execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('Ada kesahalah ketika menggunakan command, Kontak admin untuk melaporkan!');
        }
    }
};
