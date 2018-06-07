const config = {
    savePath: '/home/developer/.heracles/',
    port: 8080
};

if (process.env.SAVE_PATH) {
    config.savePath = process.env.SAVE_PATH;
}

if (process.env.PORT) {
    config.port = process.env.PORT;
}

module.exports = config;
