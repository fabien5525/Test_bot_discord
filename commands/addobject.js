const Discord = require('discord.js');
const fs = require("fs");

module.exports.run = (client, message, args) => {
    //console.log(args.length);
    if (args.length != 13) return message.channel.send("Il y a pas assez / trop d'arguments");
    if (message.member.roles.find(role => role.name === "ModoBot5525")) {
        let newobject = false;
        let id = args[0];
        let object = JSON.parse(fs.readFileSync("./bdd/object.json", "utf8"));
        if(!object[parseInt(args[0], 10)]){ //verification of the presence of the object
            newobject = true;
            object[id] = {
                "name": "",
                "type": "",
                "desc": "",
                "stats":{
                    "ad": 0,
                    "ap": 0,
                    "ar": 0,
                    "rm": 0,
                    "hp": 0,
                    "mp": 0,
                    "tc": 0,
                    "do": 0,
                    "lvl": 1,
                    "rar": 1
                },
                "effect":{

                },
                "classe": ""
            }

        }

        // format : id name type desc  ad ap   ar rm   hp  mp  tc  do    lvl  rar  classe
        //  args : [0] [1] [2]   [3]  [4] [5] [6] [7] [8] [9] [10] [11] [12]  [13] [14]
        
        if (0>parseInt(args[12], 10) || parseInt(args[12], 10) < 4) return message.channel.send(`Erreur, la rareté n'est pas compris entre [0;4]`);

        object[id].name = args[1];
        object[id].type = args[2];
        object[id].desc = args[3];
        object[id].stats.ad = parseInt(args[4], 10);
        object[id].stats.ap = parseInt(args[5], 10);
        object[id].stats.ar = parseInt(args[6], 10);
        object[id].stats.rm = parseInt(args[7], 10);
        object[id].stats.hp = parseInt(args[8], 10);
        object[id].stats.mp = parseInt(args[9], 10);
        object[id].stats.cc = parseInt(args[10], 10);
        object[id].stats.do = parseInt(args[11], 10);
        object[id].stats.lvl = parseInt(args[12], 10);
        object[id].stats.rar = parseInt(args[13], 10);
        object[id].classe = args[14];
        
        fs.writeFile("./bdd/object.json", JSON.stringify(object), (err) => {
            if(err) message.channel.send("Une erreur est survenue");
        });
        if (newobject) message.channel.send(`Votre ${object[id].name} à bien été ajouter`);
        else message.channel.send(`Votre ${object[id].name} à bien été modifier`);

    } else message.channel.send(`Vous n'avez pas la permission pour cette commande.`);
};


module.exports.help = {
    name: 'addobject',
    description: 'format(13 args): id name type desc ad ap ar rm hp mp tc do lvl rar classe'
};