var config = {
    server: 'chat.freenode.net',
    port: 6667,
    nick: 'D-3PO',
    password: 'udnfsjwekpky',
    userName: 'D-3PO',
    realName: 'D-3PO',
    channels: ['#amberfish']
};

var irc = require('irc');

var bot = new irc.Client(config.server, config.nick, config);

bot.addListener('error', function (message) {
    console.error('ERROR: %s: %s', message.command, message.args.join(' '));
});

bot.addListener('message', function (from, to, message) {
    console.log('%s => %s: %s', from, to, message);

    if (to.match(/^[#&]/)) {
        // channel message
        if (message.match(/hello/i)) {
            bot.say(to, 'Hello there ' + from);
        }        
    } else {
        // private message
    }
});