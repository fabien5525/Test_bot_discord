const Discord = require('discord.js');
const fs = require("fs");

module.exports.run = (client, message, args) => {

    let mentionned = message.mentions.members.first();
    //console.log(mentionned);
    let user;
    if(mentionned) user = mentionned.user;
    else user = message.author;
    if(user.id === message.author.id) return message.channel.send("Vous ne pouvez pas donner de coin a vous même"); //pour empecher de vous donner des coins

    let bdd = JSON.parse(fs.readFileSync("./bdd/bdd.json", "utf8"));
    if(!bdd[user.id]){
            bdd[user.id] = {
             "coin": 0
            }
    }
    bdd[user.id].coin++; //Ajoute 1 coin à la personne mentionnée
    fs.writeFile("./bdd/bdd.json", JSON.stringify(bdd), (err) => {
        if(err) message.channel.send("Une erreur est survenue");
    }); //Permet de sauvegarder dans la bdd
    message.channel.send(`Vous avez donné 1 coin à ${user.username}. utilisateur dispose de : ${bdd[user.id].coin}`);
};

module.exports.help = {
    name: 'addtoken',
    description: 'Permet d\'ajouter un token'
};