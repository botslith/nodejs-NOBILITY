const Discord = require('discord.js'); //import client from discord
const ActivityType = require('discord.js');
const keep_alive = require('./keep_alive.js')

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.TOKEN); //login bot using token
