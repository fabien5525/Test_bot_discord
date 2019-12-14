const Discord = require('discord.js');
const fs = require("fs");
const xpUpdate = require('../commandsBase/xpUpdate.js');
const hpmpUpdate = require('../commandsBase/hpmpUpdate.js');

module.exports.run = (client, message, args) => {
    
    if (args.length == 0) return message.channel.send(`Erreur, pas d'argument`);
    let mentionned = message.mentions.members.first();
    //console.log(mentionned);
    let user;
    if(mentionned) user = mentionned.user;
    else user = message.author;
    if (!args) return;

    let bdd = JSON.parse(fs.readFileSync("./bdd/bdd.json", "utf8"));
    if (!bdd[user.id]) return message.channel.send(`${user.tag} n'est pas défini dans la base de donnée.\n Veuillez |status \@${user.tag} pour le définir `);

    if (message.member.roles.find(role => role.name === "ModoBot5525")) {
        bdd[user.id].xp = bdd[user.id].xp + parseFloat(args[0], 10);
        fs.writeFile("./bdd/bdd.json", JSON.stringify(bdd), (err) => {
            if(err) message.channel.send("Une erreur est survenue");
            else {
                message.channel.send(`${user.tag} à désormais ${bdd[user.id].xp} xp`);
            }
        });
        //xpUpdate(user);
        //hpmpUpdate(user);
    }
    else {
        message.channel.send(`Vous n'avez pas la permission pour cette commande.`);
    }

    
};


module.exports.help = {
    name: 'givexp',
    description: 'Permet d\'ajouter de l\'XP'
};