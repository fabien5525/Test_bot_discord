const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async(client, message,args) => {
    let fields = [];
    fs.readdir("./commands/",(error, f) => {
        let commands = f.filter(f => f.split(".").pop() === "js");
        if (commands.length <= 0) return message.channel.send("Aucune commande trouvé");
        commands.forEach((f) => {
            //msg = `${msg} \n ${f}`;
            let command = require(`../commands/${f}`);
            fields.push({name: command.help.name, value: command.help.description});
            //console.log(msg);
        });

        return message.channel.send({
            embed: {
                color: 0xe43333,
                title: `Les commandes disponibles`,
                fields: fields
            },
        }); 
    });
};

module.exports.help = {
    name: 'help',
    description: 'Affiche l\'aide'
};
