var irc = require('irc'),
    config = require('./config'),
    extensions = require('./extensions'),
    modules = require('./modules');
    
bot = new irc.Client(config.server, config.nick, config);

bot.addListener('error', function (message) {
    if (config.devMode) { 
        console.error('ERROR: %s: %s', message.command, message.args.join(' '));
    }
});

bot.addListener('message', function (from, to, message) {
    var key, response;
    
    if (from.match('D-3PO') || from.match('Dev-3PO')) {
        return;
    }

    if (to.match(/^[#&]/)) {
        for(key in modules) {
            response = modules[key].parse({                
                from: from, to: to, message: message,
                bot: bot, modules: modules
            });
            if (response !== null) {
                bot.say(to, response);
            }
        }
    }

    if (config.devMode) { 
        console.log('%s => %s: %s', from, to, message);
    }
});

// if (message.match(diceroll.expression)) {
//     bot.say(to, diceroll.parse(message));
// } else if (message.match(coinflip.expression)) {
//     bot.say(to, coinflip.flip());
// } else if (message.match(quotes.expression)) {
//     quotes.getQuote(bot, to);
// }

// // other misc stuff
// misc.parse(bot, to, message);