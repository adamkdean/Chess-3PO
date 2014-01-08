/*var irc = require('irc'),
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

console.log('end of script');*/

var ircee = require('ircee'),
    net = require('net');

// Create a client
var irc = ircee();

irc.on('connect', function() {
    // Load the core module. It keeps the connection alive 
    // when loaded and provides the login method.    
    var core = irc.use(require('ircee/core'));
    // use the login method to send the nickname
    core.login({
        nick: 'ircee_example',
        user: 'ircee_example',
        name: 'Look! I am online!'
    });
});

// Log all protocol lines to stdout
irc.on('event', function(e) { console.log(e.raw); });

// Connect the actual socket and pipe it to the client
var s = net.connect(6667, 'irc.freenode.net');
s.pipe(irc).pipe(s);