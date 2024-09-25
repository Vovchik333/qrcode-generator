const { SlashCommandBuilder } = require("discord.js");
const { Command } = require("../enums/command.enum");

const helpSlashCommand = new SlashCommandBuilder()
    .setName(Command.HELP)
    .setDescription('Show available commands.');

module.exports = { helpSlashCommand };
