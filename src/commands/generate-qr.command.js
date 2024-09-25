const { InteractionCommand } = require("./interaction-command");
const { AttachmentBuilder } = require("discord.js");

class GenerateQRCommand extends InteractionCommand {
    #qrcodeService;

    constructor({qrcodeService}) {
        super();
        this.#qrcodeService = qrcodeService;
    }

    async execute(interaction) {
        const { value: text } = interaction.options.get('text');
        const fileBuffer = await this.#qrcodeService.generateBuffer({text});
    
        const file = new AttachmentBuilder(fileBuffer);
        await interaction.reply({files: [file]});
    }
}

module.exports = { 
    GenerateQRCommand 
};
