const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {

    let bicon = bot.user.displayAvatar
    let botEmbed = new Discord.RichEmbed()
    .setAuthor("Bot Information")
    .setTimestamp()
    .setColor("#db6e02")
    .addField("Bot Name", bot.user.username)
    .addField("Maintained By", "MonsterOG")
    .addField("My Support Discord", "https://discord.gg/eD9aDmj")
    .addField("My Website", "Coming Soon")
    .addField("Total Discord Servers", bot.guilds.size)
    .setFooter("Like the bot and want to support it? Just add it to your discord!")
    msg.channel.send(botEmbed);



}

module.exports.help = {
    name: "botinfo"
}
