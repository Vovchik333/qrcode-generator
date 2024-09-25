const { commandsWithDescription } = require("../constants/command.constants");

const guildCreateListener = (guild) => {
    const content = `Hello, ${guild.name}! Here are a few things I can do:\n${commandsWithDescription}`;

    guild.systemChannel.send({content});
};

module.exports = { guildCreateListener };
