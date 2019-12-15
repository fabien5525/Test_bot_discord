const Discord = require('discord.js');
const fs = require("fs");
const calculXpLevel = require('./calculXpLevel.js');

function xpUpdate(user) {
    console.log(`yo`);
    let bdd = JSON.parse(fs.readFileSync("./bdd/bdd.json", "utf8"));
    console.log(`yo2`);
    console.log(bdd);
    while (bdd[user.id].xp > calculXpLevel(bdd[user.id].lvl)){
        bdd[user.id].xp = bdd[user.id].xp - calculXpLevel(bdd[user.id].lvl);
        bdd[user.id].lvl++;
    }
    fs.writeFile("./bdd/bdd.json", JSON.stringify(bdd), (err) => {
        if(err) message.channel.send("Une erreur est survenue");
    });
}

module.exports = xpUpdate;

