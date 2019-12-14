module.exports = (client) => {
    client.user.setPresence({
        game: {
            name: "|help -> pour de l'aide"
        }
    });
};