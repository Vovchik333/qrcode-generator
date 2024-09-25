const { generateQRCommand } = require("../../src/commands");
const { Command } = require("../../src/enums/command.enum");

const mockInteraction = {
    commandName: Command.GENERATE_QR,
    options: {
        get: jest.fn()
    },
    reply: jest.fn()
};

describe('Tests for /generate-qr command', () => {
    it('should get a text and send a QR-code', async () => {
        mockInteraction.options.get.mockReturnValueOnce({value: 'https://www.example.com'});
        
        await generateQRCommand.execute(mockInteraction);

        expect(mockInteraction.options.get).toHaveBeenCalledWith('text');
        expect(mockInteraction.reply).toHaveBeenCalled();
    });
});