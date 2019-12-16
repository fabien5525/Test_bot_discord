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
                "lvl": 1,
                "xp": 0,
                "ad": 1,
                "ap": 1,
                "ar": 5,
                "rm": 5,
                "hp": 10,
                "mp": 10,
                "cc": 1,
                "do": 1,
                "money": 0,
                "adlost": 0,
                "aplost": 0,
                "arlost": 0,
                "rmlost": 0,
                "hplost": 0,
                "mplost": 0,
                "cclost": 0,
                "dolost": 0,
                "inv":{},
                "eqstuff":
                {
                    "we":
                    {
                        "1":"",
                        "2":""
                    },
                    "ar":
                    {
                        "he":"",
                        "ch":"",
                        "le":"",
                        "bo":""
                    },
                    "ac":
                    {
                        "co":"",
                        "br":""
                    }
                }  
            }
            console.log(`${user.id} non trouvé dans la bdd, création de données pour ${user.tag}`);
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
        .addField(`Point de vie | Point de mana : `, `${bdd[user.id].hp - bdd[user.id].hplost} | ${bdd[user.id].mp - bdd[user.id].mplost}`)
        .addField(`Attaque physique | Attaque magique : `, `${bdd[user.id].ad - bdd[user.id].adlost} | ${bdd[user.id].ap - bdd[user.id].aplost}`)
        .addField(`Resistance physique |Resistance magique : `, `${bdd[user.id].ar - bdd[user.id].arlost} | ${bdd[user.id].rm - bdd[user.id].rmlost}`)
        .addField(`Chance de critique | Esquive : `, `${bdd[user.id].cc - bdd[user.id].cclost} | ${bdd[user.id].do - bdd[user.id].dolost}`)
        .addField(`Argent : `, bdd[user.id].money)
       

    message.channel.send(about_message);
    
    fs.writeFile("./bdd/bdd.json", JSON.stringify(bdd), (err) => {
        if(err) message.channel.send("Une erreur est survenue");
    });

};

module.exports.help = {
    name: 'status',
    description: 'Affiche les status'
};