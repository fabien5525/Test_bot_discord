const Discord = require('discord.js');
const fs = require("fs");
const calculXpLevel = require('../commandsBase/calculXpLevel.js');


module.exports.run = (client, message, args) =>{
    let mentionned = message.mentions.members.first();
    //console.log(mentionned);
    let user;
    if(mentionned) user = mentionned.user;
    else user = message.author;
    //if (!user) return message.channel.send(`no user select`);

    let bdd = JSON.parse(fs.readFileSync("./bdd/bdd.json", "utf8"));
    if(!bdd[user.id]){ //verification of the presence of the user
            bdd[user.id] = {
                "coin": 0,
                "lvl": 1,
                "xp": 0,
                "hp": 10,
                "mp": 10,
                "money":0,
                "hplost":0,
                "mplost":0
            }
            console.log('No user found in bdd ! Creating new values...');
    }
    fs.writeFile("./bdd/bdd.json", JSON.stringify(bdd), (err) => {
        if(err) message.channel.send("Une erreur est survenue");
    });


    const about_message = new Discord.RichEmbed()
        .setColor('#66ffff')
        .setAuthor(user.tag, user.displayAvatarURL)
        .setTitle(`Statistique du joueur : `)
        .addField(`Niveau : `, bdd[user.id].lvl)
        .addField(`Expérience : `, `${bdd[user.id].xp} / ${calculXpLevel(bdd[user.id].lvl)}`)
        .addField(`Point de vie : `, bdd[user.id].hp)
        .addField(`Point de Mana : `, bdd[user.id].mp)
        .addField(`Argent : `, bdd[user.id].money);

    message.channel.send(about_message);
    
    fs.writeFile("./bdd/bdd.json", JSON.stringify(bdd), (err) => {
        if(err) message.channel.send("Une erreur est survenue");
    });

};

module.exports.help = {
    name: 'status',
    description: 'Affiche les status'
};