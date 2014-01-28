var help = {
    message: 'Use !modules command to show a list of currently installed modules'
};

var expression = /\!\b(modules)\b/i;

var listModules = function (modules) {
    var list = 'Modules installed: ';
    for (var key in modules) {
        list += key + ', ';
    }
    return list.substring(0, list.length - 2);
};

var parse = function (args) {
    if (args.message.match(expression)) {
        return listModules(args.modules);
    }

    return null;
};

module.exports = {
    parse: parse,
    help: help
};