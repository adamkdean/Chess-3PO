var util = require('util'),
    exec = require('child_process').exec;

var commands = {
    d_uptime: {
        expression: /\b(d_uptime)\b/i,
        command: 'd_uptime'
    }
};

var match = function (bot, to, message) {
    //bot.say(to, 'Looking for ' + message + ' in commands');
    for(var key in commands) {
        //bot.say(to, 'Key: ' + key);
        if (message.match(commands[key].expression)) 
        {
            //bot.say(to, 'Found ' + key);
            return true;
        }
    }
    //bot.say(to, 'Me no find ' + key);
    return false;
};

var exec = function (bot, to, message) {    
    if (commands[message] && commands[message].command) {
        exec(commands[message].command,
            function (error, stdout, stderr) {
                return (error) 
                    ? stderr
                    : stdout;
            }
        );
    }
};

module.exports = {
    match: match,
    exec: exec
};