const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
  let ticked = msg.guild.member(msg.mention.users.first() || msg.guild.members.get(args[0]));
  if(!ticketed) return msg.channel.send(`${msg.author}, please mention a valid user!`);
  let ticket = args.join(" ").slive(22);
  let guild = msg.guild;

let tIcon = msg.author.displayAvatarURL
  let tickets = new Discord.RichEmbed()
  .setThumbnail(tIcon)
  .setTitle("Tickets")
  .setColor("#db6e02")
  .addField("Reported:", `${reported} with ID: ${reported.id}`)
  .addField("Reporter:", `${msg.author} with ID: ${msg.author.id}`)
  .addField("Reported In:", msg.channel)
  .addField("Time Reported:", msg.createdAt)
  .addField("Report:", `${reason}`);

let ticketchannel = bot.channels.get(`511720680887287818`);
ticketchannel.send(tickets);

return;

}

module.exports.help = {
  name: "ticket"
}
