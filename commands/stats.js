const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = (client, message, args) =>{
    const member = message.mentions.members.first() || message.member;
    //if (!member) return message.channel.send(`no user select`);
    message.channel.send({
        embed: {
            color: 0xe43333,
            title: `Statistique de : **${member.user.tag}**`,
            thumbnail: {
                url: member.user.displayAvatarURL
            },
            fields: [ {
                    name: '> ID :',
                     value: member.id
                }, {
                    name: 'Crée le :',
                    value: moment.utc(member.user.createdAt).format("LL")
                }, {
                    name: 'Jeu :',
                    value: `${member.user.presence.game ? `${member.user.presence.game.name}` : 'Not in a game'}`               
                },{
                    name: 'À rejoin le :',
                    value: moment.utc(member.joinAt).format('LL')
                }   
            ],
            footer: {
                text: `Informations de l'utilisateur : ${member.user.username}`
            }
        },
    });
};

module.exports.help = {
    name: 'stats',
    description: 'Affiche les statistiques d\'un utilisateur'
};