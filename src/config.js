var config = {
    server: process.env.IRC_SERVER || 'chat.freenode.net',
    port: process.env.IRC_PORT || 6667,
    nick: process.env.IRC_NICK || 'Chess-3PO',
    password: process.env.IRC_PASSWORD || '',
    userName: process.env.IRC_USERNAME || 'Chess-3PO',
    realName: process.env.IRC_REALNAME || 'Chess-3PO',
    channels: ['#0x0']
};

module.exports = config;
