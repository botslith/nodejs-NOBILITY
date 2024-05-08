const { Discord, ActivityType } = require('discord.js'); //import client from discord
const keep_alive = require('./keep_alive.js')

const client = new Discord.Client();

let status = [
  {
    name: 'Under Ctrl',
    type: ActivityType.Streaming,
    url: 'https://youtu.be/2lgEZB4eEF0?si=cOLDecQGHarYx83_',
  },
]

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.TOKEN); //login bot using token
