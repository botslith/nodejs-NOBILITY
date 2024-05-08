const { Client, Discord, ActivityType } = require('discord.js');
const keep_alive = require('./keep_alive.js')

// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token);

let status = [
  {
    name: 'Under Ctrl',
    type: ActivityType.Streaming,
    url: 'https://youtu.be/2lgEZB4eEF0?si=cOLDecQGHarYx83_',
  },
]

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});

bot.connect(); // Get the bot to connect to Discord
