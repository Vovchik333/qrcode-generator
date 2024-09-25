const { helpCommand } = require("../../src/commands");
const { commandsWithDescription } = require("../../src/constants/command.constants");
const { Command } = require("../../src/enums/command.enum");

const mockInteraction = {
    commandName: Command.HELP,
    reply: jest.fn()
};

describe('Tests for /help command', () => {
    it('should send info about available commands', async () => {
        const content = `All available commands and description:\n${commandsWithDescription}`;

        await helpCommand.execute(mockInteraction);

        expect(mockInteraction.reply).toHaveBeenCalledWith({content});
    });
});
