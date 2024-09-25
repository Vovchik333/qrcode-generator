const { commandsWithDescription } = require("../constants/command.constants");
const { InteractionCommand } = require("./interaction-command");

class HelpCommand extends InteractionCommand {
    async execute(interaction) {
        const content = `All available commands and description:\n${commandsWithDescription}`;
    
        interaction.reply({content});
    }
}

module.exports = { HelpCommand };
