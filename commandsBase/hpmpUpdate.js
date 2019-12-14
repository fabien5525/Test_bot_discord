const Discord = require('discord.js');
const fs = require("fs");
const HP_LVL_1 = 10;
const MP_LVL_1 = 10;


function hpmpUpdate(user){
    if (!user) ;
    else {
        let bdd = JSON.parse(fs.readFileSync("./bdd/bdd.json", "utf8"));
        const HPBYLVL = HP_LVL_1 + 10*(bdd[user.id].lvl - 1);
        const MPBYLVL = MP_LVL_1 + 3*(bdd[user.id].lvl - 1);

        bdd[user.id].hp = HPBYLVL - bdd[user.id].hplost;
        bdd[user.id].mp = MPBYLVL - bdd[user.id].mplost;
        
        fs.writeFile("./bdd/bdd.json", JSON.stringify(bdd), (err) => {
            if(err) message.channel.send("Une erreur est survenue");
        });
    }
}

module.exports = hpmpUpdate;
