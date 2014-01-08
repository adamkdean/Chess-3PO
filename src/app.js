var net = require('net'),
    ircee = require('ircee'),
    config = require('./config');

var irc = ircee();

irc.on('connect', function() {
    
    // Load the core module. It keeps the connection alive 
    // when loaded and provides the login method.    
    var core = irc.use(require('ircee/core'));

    // use the login method to send the nickname
    core.login({
        nick: config.nick,
        user: config.userName,
        name: config.realName,
        pass: config.password
    });

});

// Log all protocol lines to stdout
irc.on('event', function(e) { 
    console.log(e.raw);
});

// Connect the actual socket and pipe it to the client
var s = net.connect(6667, 'irc.freenode.net');
s.pipe(irc).pipe(s);