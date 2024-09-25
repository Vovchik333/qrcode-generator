require("dotenv/config");
const { Client, IntentsBitField } = require('discord.js');
const { BOT_TOKEN } = require("./config");
const { 
    interactionCreateListener, 
    readyListener, 
    guildCreateListener
} = require("./listeners");

const bot = new Client({
    intents: [
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.Guilds
    ]
});

bot.on('ready', readyListener);
bot.on('guildCreate', guildCreateListener);
bot.on('interactionCreate', interactionCreateListener);

bot.login(BOT_TOKEN);
