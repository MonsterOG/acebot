module.exports.run = async (bot, msg, args) => {
  if(msg.author.id != `381290451728334849`) return msg.channel.send (`${msg.author}, you may not use this command!`);
    if(!args || args.size < 1) return msg.channel.send("Please provide a valid command");
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    msg.reply(`${args[0]} has been reloaded!`);
}

module.exports.help = {
  name: "reload"
}
