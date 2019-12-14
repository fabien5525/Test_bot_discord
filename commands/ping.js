const Discord = require('discord.js');

module.exports.run = async(client, message,args) => {

    let begin = Date.now();
    await message.channel.send("Ping").then(async(m) => await m.edit(`Pong : ${Date.now() - begin} ms`));
};

module.exports.help = {
    name: 'ping',
    description: 'Pong !'
};