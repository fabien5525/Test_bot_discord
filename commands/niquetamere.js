const Discord = require('discord.js');

module.exports.run = async(client, message,args) => {
    let mentionned = message.mentions.members.first();
    if (!mentionned) message.channel.send(`Nique ta mère !`);
    else message.channel.send(`Nique ta mère ${mentionned} !`);   
};

module.exports.help = {
    name: 'niquetamere',
    description: 'Insulte quelqu\'un !'
};