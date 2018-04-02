const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = (".")
bot.login(process.env.TOKEN);

bot.on('ready', function() {
    bot.user.setGame(".help");
    console.log("Connectedç");
});

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "sfw-general").send(`Bienvenue à ${member} ! \n Amuse toi bien et n'oublie pas d'aller lire le règlement.`)
})

bot.on('guild.member.add', member => {
    var role = member.guild.roles.find('name', 'Membres');
    member.addRole(role)
})

bot.on('message', function (message) {
    if(message.content === "Qui est Rai ?") {
    message.channel.send('Le fondateur !')
 
}})

bot.on('message', function (message) {
    if(message.content === "Qui est Uchiro ?") {
    message.channel.send('La Co-Fondatrice ou presque :D.')
    
}})

bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes : \n - .help \n - En dévellopement. ");
    }})

bot.on('message', function (message) {
    if(message.content === "PUTIN") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "Putin") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "putin") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "Merde") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "merde") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "MERDE") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "Con") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "con") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "CON") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "CONNARD") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "Connard") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "connard") {
    message.channel.send('Surveille ton language.')  

}})
bot.on('message', function (message) {
    if(message.content === "Qui est Noah ?") {
    message.channel.send("Heuu .. Bah c'est Noah, le premier Modo ^^ .")  
}})
 

