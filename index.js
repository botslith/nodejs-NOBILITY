const { Discord, ActivityType } = require('discord'); //import discord
const keep_alive = require('./keep_alive.js')

const client = new Discord.Client(); //create new client

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
    else {
        msg.reply(msg.content);
    }
});

client.login(process.env.TOKEN);
