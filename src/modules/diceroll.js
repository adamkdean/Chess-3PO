var help = {
    message: 'Roll dice with standard syntax. !d6 is one six sided die. !2d6 is two. !2d6+5 rolls two dice and adds 5, etc.'
};

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

var parse = function (args) {
    if (args.message.match(expression)) {
        var d = calculate.apply(this, args.message.match(expression));
        return d.input + ': ' + d.output;
    }

    return null;
};

module.exports = {
    parse: parse,
    help: help
};