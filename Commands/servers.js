module.exports.run = async (bot, msg, args) => {
     msg.channel.send(`__**${bot.user.username} is in the following discord servers:**__ \n\n${bot.guilds.map(g => `${g.name} - **${g.memberCount} Members**`).join(`\n`)}`, {split: true})
   }

module.exports.help = {
    name: "servers"
}
