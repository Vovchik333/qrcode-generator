const { qrcodeService } = require("../lib/services");
const { GenerateQRCommand } = require("./generate-qr.command");
const { HelpCommand } = require("./help.command");

const generateQRCommand = new GenerateQRCommand({qrcodeService});
const helpCommand = new HelpCommand();

module.exports = {
    GenerateQRCommand,
    HelpCommand,
    generateQRCommand,
    helpCommand
};
