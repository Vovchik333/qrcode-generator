require("dotenv/config");
const { REST, Routes } = require("discord.js"); 
const { BOT_ID, BOT_TOKEN, SERVER_ID } = require("../config.js");
const { generateQRSlashCommand } = require("./generate-qr.js");
const { helpSlashCommand } = require("./help.js");

const rest = new REST().setToken(BOT_TOKEN);

const registerCommands = async () => {
    const fullRoute = process.env.NODE_ENV === 'production' ? (
        Routes.applicationCommands(BOT_ID)
    ) : (
        Routes.applicationGuildCommands(BOT_ID, SERVER_ID) 
    );
    const commands = [
        generateQRSlashCommand,
        helpSlashCommand
    ];

    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);
        
        const data = await rest.put(
            fullRoute, 
            { body: commands }
        );

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch(err) {
        console.error(err);
    }
}

registerCommands();
