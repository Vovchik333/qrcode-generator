const { Command } = require("../../src/enums/command.enum");
const { interactionCreateListener } = require("../../src/listeners");

const mockInteraction = {
    isCommand: jest.fn(),
    commandName: Command.HELP,
    reply: jest.fn()
};

describe('Tests for "interactionCreate" discord bot event listener', () => {
    it('should call "reply()" when the interaction is a slash command', () => {
        mockInteraction.isCommand.mockReturnValueOnce(true);

        interactionCreateListener(mockInteraction);

        expect(mockInteraction.isCommand).toHaveBeenCalled();
        expect(mockInteraction.reply).toHaveBeenCalled();
    });

    it('should not call "reply()" when the interaction is not a slash command', () => {
        mockInteraction.isCommand.mockReturnValueOnce(false);

        interactionCreateListener(mockInteraction);

        expect(mockInteraction.isCommand).toHaveBeenCalled();
        expect(mockInteraction.reply).not.toHaveBeenCalled();
    });
});
