var expression = /\!\b(coinflip)\b/i;

var flip = function () {
    var result = Math.floor((Math.random() * 2)),
    flip = (result) ? 'heads' : 'tails';
    return 'Flipping a coin... ' + flip + '!';
};

var parse = function (to, from, message) {
    if (message.match(expression)) {
        return flip();
    }

    return null;
};

module.exports = {
    parse: parse
};