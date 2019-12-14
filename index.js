const Discord = require('discord.js');
const client = new Discord.Client();
client.login('NjUzMzc1MjY2OTM2MzI0MTI4.Xe2FTQ.jU-tmwR9DduKOKH9TUlxYBkG76U');

const fs = require('fs');

client.commands = new Discord.Collection();

fs.readdir("./commands/",(error, f) => {
  if (error) console.log(error);

  let commands = f.filter(f => f.split(".").pop() === "js");
  if (commands.length <= 0) return console.log("Aucune commande trouvé");

  commands.forEach((f) => {
    let command = require(`./commands/${f}`);
    console.log(`${f} command chargées`);
    client.commands.set(command.help.name, command);
  });
});

fs.readdir("./Events/",(error, f) => {

  if (error) console.log(error);
  console.log(`${f.length} event en cours de chargement`);
  f.forEach((f) => {
    const events = require(`./Events/${f}`);
    const event = f.split(".")[0];
    client.on(event, events.bind(null, client));
  });
});

