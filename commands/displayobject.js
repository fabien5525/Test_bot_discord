const Discord = require('discord.js');
const fs = require("fs");

module.exports.run = (client, message, args) => {
    if (args.length != 1) return message.channel.send(`Erreur, pas d'argument`)
    if (message.member.roles.find(role => role.name === "ModoBot5525")) {
        const id = parseInt(args[0], 10);
        const object = JSON.parse(fs.readFileSync("./bdd/object.json", "utf8"));
        if(!object[id]) return message.channel.send(`l'objet de id : ${id} n'existe pas`);
        else { //verification of the presence of the object
            const about_message = new Discord.RichEmbed()
            .setColor('#66ffff')
            .setAuthor(`Statistique de l\'objet **${object[id].name}**`)
            .setTitle(`Type : `)
            .addField(`Niveau : `, bdd[user.id].lvl)
            .addField(`Classe nécessaire : : `, object[id].classe)
            

            .addField(`Point de vie | Point de mana : `, `${bdd[user.id].hp - bdd[user.id].hplost} | ${bdd[user.id].mp - bdd[user.id].mplost}`)
            .addField(`Attaque physique | Attaque magique : `, `${bdd[user.id].ad - bdd[user.id].adlost} | ${bdd[user.id].ap - bdd[user.id].aplost}`)
            .addField(`Resistance physique |Resistance magique : `, `${bdd[user.id].ar - bdd[user.id].arlost} | ${bdd[user.id].rm - bdd[user.id].rmlost}`)
            .addField(`Chance de critique | Esquive : `, `${bdd[user.id].cc - bdd[user.id].cclost} | ${bdd[user.id].do - bdd[user.id].dolost}`)
            .addField(`Argent : `, bdd[user.id].money)
       

            message.channel.send(about_message);
            message.channel.send({
                embed: {
                    color: 0xe43333,
                    title: `Statistique de l\'objet **${object[id].name}**`,
                    fields: [{
                            name: 'Type :',
                            value: object[id].type
                        },{
                            name: 'Classe nécessaire :',
                            value: object[id].classe               
                        },{
                            name: 'Description :',
                            value: object[id].classe 
                        },{
                            name: 'Attaque physique :',
                            value: object[id].stats.ad
                        },{
                            name: 'Attaque magique :',
                            value: object[id].stats.ap
                        },{
                            name: 'Résistance physique',
                            value: object[id].stats.ar
                        },{
                            name: 'Résistance magique :',
                            value: object[id].stats.rm
                        },{
                            name: 'Point de Vie :',
                            value: object[id].stats.hp
                        },{
                            name: 'Point de Mana :',
                            value: object[id].stats.mp
                        },{
                            name: 'Taux de critique :',
                            value: object[id].stats.cc
                        },{
                            name: 'Esquive :',
                            value: object[id].stats.do
                        },{
                            name: 'Niveau requis:',
                            value: object[id].stats.lvl
                        },{
                            name: 'Rareté :',
                            value: object[id].stats.ra
                        }       
                    ]
                }
            });
        }
    } 
     else message.channel.send(`Vous n\'avez pas la permission pour cette commande.`);
};


module.exports.help = {
    name: 'displayobject',
    description: 'affiche l\'item en fonction de son id'
};