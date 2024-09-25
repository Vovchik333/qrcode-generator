const { commandsWithDescription } = require("../../src/constants/command.constants");
const { guildCreateListener } = require("../../src/listeners");

const mockGuild = {
    name: 'test-guild',
    systemChannel: {
        send: () => {}
    }
};

describe('Tests for "guildCreate" discord bot event listener', () => {
    it('should send info about what the bot can do', () => {
        const sendSpy = jest.spyOn(mockGuild.systemChannel, 'send');
        const content = `Hello, ${mockGuild.name}! Here are a few things I can do:\n${commandsWithDescription}`;

        guildCreateListener(mockGuild);

        expect(sendSpy).toHaveBeenCalledWith({content});
    });
});
