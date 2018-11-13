const Discord = require("discord.js");

exports.run = (bot, msg, args) => {
  msg.channel.send(`${msg.author} here is your ID: **${msg.author.id}**. Keep in mind, this is not private what so ever!`)
};
module.exports.help = {
  name: "ID"
}
