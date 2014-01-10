var irc = require('irc'),
    config = require('./config'),
    diceroll = require('./diceroll'),

var bot = new irc.Client(config.server, config.nick, config);

bot.addListener('error', function (message) {
    console.error('ERROR: %s: %s', message.command, message.args.join(' '));
});

bot.addListener('message', function (from, to, message) {
    console.log('%s => %s: %s', from, to, message);    

    if (to.match(/^[#&]/)) {

        if (message.match(/(?:(\d+)\s*\*\s*)?(\d*)d(\d+)(?:\s*([\+\-]\s*\d+))?/i)) {
            bot.say(to, from + ': ' + message + ' = ' + diceroll.parse(message));;
        }

        if (message.match(/hello/i)) {
            bot.say(to, 'Hello ' + from);
        }

        if (message.match(/diceroll/i)) {
            bot.say(to, 'Not implemented yet, ' + from);
        }

    }
});