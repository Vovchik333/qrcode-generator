const { 
    generateQRCommand,
    helpCommand
} = require('../commands/interaction');
const { Command } = require('../enums/command.enum');

const interactionCommands = new Map([
    [Command.GENERATE_QR, generateQRCommand],
    [Command.HELP, helpCommand]
]);

const interactionCreateListener = async (interaction) => {
    if (interaction.isCommand()) {
        const command = interactionCommands.get(interaction.commandName);
        await command.execute(interaction)
    }
}

module.exports = { interactionCreateListener };
