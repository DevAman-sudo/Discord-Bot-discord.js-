// NPM Imported Packages //
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

// Logging In On Discord Bot //
const token = process.env.BOT_TOKEN;
client.login(token);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Handiling Server Messages //
client.on('message', msg => {
    if (msg.content === 'hii') {
        msg.reply('pong');
    }
});
