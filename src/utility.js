var util = require('util'),
    exec = require('child_process').exec;

var commands = {
    '!uptime': 'uptime',
    '!uname': 'uname'
};

var match = function (bot, to, message) {
    var regex, key;
    for(key in commands) {
        regex = new RegExp("/\b(" + key + ")\b/i");
        if (message.match(regex)) {        
            return true;
        }
    }
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