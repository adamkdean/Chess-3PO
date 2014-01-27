var DEV_MODE = false;

var config = {
    server: 'chat.freenode.net',
    port: 6667,
    nick: (DEV_MODE) ? 'Dev-3PO' : 'D-3PO',
    password: 'udnfsjwekpky',
    userName: (DEV_MODE) ? 'Dev-3PO' : 'D-3PO',
    realName: (DEV_MODE) ? 'Dev-3PO' : 'D-3PO',
    channels: ['#amberfish'],
    devMode: DEV_MODE
};

module.exports = config;