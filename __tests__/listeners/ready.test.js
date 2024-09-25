const { readyListener } = require("../../src/listeners");

const mockClient = {
    user: {
        tag: 'bot#1111'
    }
};

describe('Tests for "ready" discord bot event listener', () => {
    it('should log that bot is online', () => {
        const logSpy = jest.spyOn(console, 'log');

        readyListener(mockClient);

        expect(logSpy).toHaveBeenCalledWith(`${mockClient.user.tag} is online.`);
    });
});
