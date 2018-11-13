const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
  let help = new Discord.RichEmbed()
  .setColor("#db6e02")
  .setTitle("Ace's Commands")
  .setTimestamp()
  .addField("Help", "Lists these commands")
  .addField("Developers", "With this command you will be able to fiew my developer(s)")
  .addField("Servers", "List the servers I am currently in")
  .addField("Say", "Lets you speak from the bot | Coming soon")
  msg.author.send(help);

}

module.exports.help = {
    name: "help"
}
