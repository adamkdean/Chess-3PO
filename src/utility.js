var util = require('util'),
    exec = require('child_process').exec;

var commands = {
    '!uptime': {
        expression: /\b(!uptime)\b/i,
        command: '!uptime'
    }
};

var match = function (bot, to, message) {
    
    for(var key in commands) {
        
        if (message.match(commands[key].expression)) 
        {
        
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