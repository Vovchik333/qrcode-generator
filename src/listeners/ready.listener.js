const readyListener = (client) => {
    console.log(`${client.user.tag} is online.`);
};

module.exports = { readyListener };
