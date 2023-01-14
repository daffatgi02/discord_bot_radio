const { prefix } = require('../config.json');
module.exports = {
    name: 'purge',
    description: 'Menghapus pesan secara bersamaan',
    execute(message, args) {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Kamu tidak memiliki akses untuk command ini!");
        const amount = parseInt(args[0]) + 1;
        if (isNaN(amount)) {
            return message.reply('Berikan nomor dengan benar!');
        } else if (amount <= 1 || amount > 100) {
            return message.reply('Setidak nya berikan nomor 1 sampai dengan 99');
        }

        message.channel.bulkDelete(amount, true)
            .then(deleted => message.channel.send(`Bot menghapus \`${deleted.size}\` << telah di hapus`))
            .catch(err => message.reply(`Ada sesuatu error ${err}`));
    },
};
