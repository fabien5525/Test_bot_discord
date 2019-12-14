const Discord = require('discord.js');
const fs = require("fs");
const calculXpLevel = require('./calculXpLevel');

function xpUpdate(user) {
    if (!user) ;
    else {
        let bdd = JSON.parse(fs.readFileSync("./bdd/bdd.json", "utf8"));
        while (bdd[user.id].xp > calculXpLevel(bdd[user.id].lvl)){
            bdd[user.id].xp = bdd[user.id].xp - calculXpLevel(bdd[user.id].lvl);
            bdd[user.id].lvl++;
        }
        fs.writeFile("./bdd/bdd.json", JSON.stringify(bdd), (err) => {
            if(err) message.channel.send("Une erreur est survenue");
        });
    }
}

module.exports = xpUpdate;

