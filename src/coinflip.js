var expression = /\b(coinflip)\b/i;

var flip = function () {
    var result = Math.floor((Math.random() * 2)),
    flip = (result) ? 'heads' : 'tails';
    return flip;
};

module.exports = {
    expression: expression,
    flip: flip
};