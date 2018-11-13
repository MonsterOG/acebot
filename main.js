const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./Commands/", (err, files) => {

    if(err) console.log(err)
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Some files in the command folder were not found! Try adding some!");
        return;
    }

jsfile.forEach((f, i) =>{
    let props = require(`./Commands/${f}`)
    console.log(`${f} loaded without any errors!`);
    bot.commands.set(props.help.name, props);
    });
});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is activated! I am in ${bot.guilds.size} Servers!`);
    bot.user.setActivity(";help | discord.gg/eD9aDmj", {type: "WATCHING"});
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

let prefix = ";";
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);
let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(bot,message,args);

});

bot.login(config.token);
