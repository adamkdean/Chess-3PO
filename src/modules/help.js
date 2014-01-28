var expressions = [
    /\!\b(help)\b/i,
    /\!\b(help)\b \b(.+)\b/i
];

var modulesWithHelp = function (modules) {
    var key, helpList = [];
    for (key in modules) {
        if (typeof modules[key].help !== 'undefined') {
            helpList.push(key);
        }
    }
    return helpList;
};

var getHelpText = function (args, msg, cmd, key) {
    return (args.modules[key] && args.modules[key].help) 
        ? args.modules[key].help.message
        : 'No help found for ' + key;
};

var parse = function (args) {
    var params, helpList, result, i;

    if (args.message.match(expressions[1])) {
        params = args.message.match(expressions[1]);
        params.unshift(args);
        return getHelpText.apply(this, params);   
    }

    if (args.message.match(expressions[0])) {
        helpList = modulesWithHelp(args.modules);
        if (helpList.length > 0) {
            result = 'Type !help <command> for more help. Available commands with help: ';
            for (i = 0; i < helpList.length; i++) {
                result += helpList[i] + ', ';
            }
            return result.substring(0, result.length - 2);
        }

        return 'No help available.';
    }

    return null;
};

module.exports = {
    parse: parse
};