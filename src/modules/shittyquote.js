var help = {
    message: 'Produce a shitty, low-quality quote from iheartquotes.com'
};

var http = require('http'),
    expression = /\!\b(shittyquote)\b/i,
    max_lines = 1,
    max_characters = 255,
    api_url = 'http://iheartquotes.com/api/v1/random?format=json&max_lines=' + max_lines + '&max_characters=' + max_characters;

var getQuote = function (bot, to) {
    http.get(api_url, function(res) {
        var body = '';

        res.on('data', function(chunk) {
            body += chunk;
        });

        res.on('end', function() {
            var response = JSON.parse(body);
            bot.say(to, response.quote);
        });
    }).on('error', function(e) {
          bot.say(to, 'Error getting quote. I sleep now.');
    });
};

var parse = function (args) {
    if (args.message.match(expression)) {
        getQuote(args.bot, args.to);
    }

    return null;
};

module.exports = {
    parse: parse,
    help: help
};