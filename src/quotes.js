var http = require('http'),
    expression = /\b(!quote)\b/i,
    max_lines = 1,
    max_characters = 255,
    api_url = 'http://iheartquotes.com/api/v1/random?format=json&max_lines=' + max_lines + '&max_characters=' + max_characters;

var getQuote = function () {
    http.get(api_url, function(res) {
        var body = '';

        res.on('data', function(chunk) {
            body += chunk;
        });

        res.on('end', function() {
            var response = JSON.parse(body);
            return response.quote;
        });
    }).on('error', function(e) {
          return 'Error getting quote. I sleep now.';
    });
};

module.exports = {
    expression: expression,
    getQuote: getQuote
};