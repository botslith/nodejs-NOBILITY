const { Client, GatewayIntentBits, ActivityType, TextChannel } = require('discord.js'); //import client from discord
const keep_alive = require('./keep_alive.js')

const client = new Client({
  intents: Object.keys(GatewayIntentBits).map((a) => {
    return GatewayIntentBits[a];
  }),
});

let status = [
  {
    name: 'Under Ctrl',
    type: ActivityType.Streaming,
    url: 'https://youtu.be/2lgEZB4eEF0?si=Q7c1CE_x4F132OZR',
  },
]

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.TOKEN); //login bot using token
