var irc = require('irc'),
    config = require('./config');

var bot = new irc.Client(config.server, config.nick, config);

bot.addListener('error', function (message) {
    console.error('ERROR: %s: %s', message.command, message.args.join(' '));
});

bot.addListener('message', function (from, to, message) {
    if (to.match(/^[#&]/)) {

        if (message.match(/hello/i)) {
            bot.say(to, 'Hello ' + from);
        }

        if (message.match(/diceroll/i)) {
            bot.say(to, 'Not implemented yet, ' + from);
        }

    }
});