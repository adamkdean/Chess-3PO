var irc = require('irc'),
    config = require('./config');

var bot = new irc.Client(config.server, config.nick, config);

console.log('configuring listeners...');

bot.addListener('error', function (message) {
    console.error('ERROR: %s: %s', message.command, message.args.join(' '));
});

bot.addListener('message', function (from, to, message) {
    console.log('%s => %s: %s', from, to, message);    

    if (to.match(/^[#&]/)) {

        if (message.match(/hello/i)) {
            bot.say(to, 'Hello ' + from);
        }

        if (message.match(/diceroll/i)) {
            bot.say(to, 'Not implemented yet, ' + from);
        }

    }
});


console.log('end of script');