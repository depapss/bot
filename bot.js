const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require ('fs')
client.on('ready', () => {
  console.log(`welcome bro ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'مرحبا') {
    msg.channel.send('شبيك');
  }
});

client.login(process.env.BOT_TOKEN);
