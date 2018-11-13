const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
 let devs = new Discord.RichEmbed()
 .setTitle("**Developer List**")
 .setColor("#db6e02")
 .setTimestamp()
 .addField("Director", "MonsterOG")
 .addField("Developer", "N/A")
 .addField("Developer", "N/A")
 .setFooter("This is a list of my current developer(s)", msg.author.diplayAvatarURL);

 msg.channel.send(devs);
}
module.exports.help = {
    name: "developers"
}
