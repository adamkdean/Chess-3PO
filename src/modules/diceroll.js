var expression = /\!(?:(\d+)\s*\*\s*)?(\d*)d(\d+)(?:\s*([\+\-]\s*\d+))?/i;

var calculate = function (s, m, n, f, a) {
    m = parseInt(m);
    if (isNaN(m)) m = 1;
    n = parseInt(n);
    if (isNaN(n)) n = 1;
    f = parseInt(f);
    a = typeof (a) == 'string' ? parseInt(a.replace(/\s/g, '')) : 0;
    if (isNaN(a)) a = 0;
    var r = 0;
    for (var i = 0; i < n; i++)
        r += Math.floor((Math.random() * f) + 1);
    return {
        input: s,
        output: r * m + a
    };
};

var parse = function (to, from, message) {
    if (message.match(expression)) {
        var d = calculate.apply(this, message.match(expression));
        return d.input + ': ' + d.output;
    }

    return null;
};

module.exports = {
    parse: parse
};