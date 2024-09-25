const { SlashCommandBuilder } = require("discord.js");
const { Command } = require("../enums/command.enum");

const TEXT_MAX_LENGTH = 4295;

const generateQRSlashCommand = new SlashCommandBuilder()
    .setName(Command.GENERATE_QR)
    .setDescription('Generate a QR-code from a text.')
    .addStringOption(option => {
        return option
            .setName('text')
            .setDescription('Text string.')
            .setRequired(true)
            .setMaxLength(TEXT_MAX_LENGTH);
    });

module.exports = { generateQRSlashCommand };
