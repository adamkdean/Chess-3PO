var parse = function (bot, to, message) {    
    if (message.match(/\b(you can do it)\b/i) {
        bot.say(to, 'Yeah, you can do it');
    }
};

module.exports = {
    parse: parse
};