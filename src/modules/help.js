var expression = /\!\b(help)\b\b(.+)\b/i;

var modulesWithHelp = function (modules) {
    var helpList = [];
    for (var key in modules) {
        if (typeof modules[key].help !== 'undefined') {
            helpList.push(key);
        }
    }
    return helpList;
};

var getHelpText = function (help, module) {
    console.log(help, module);

    return 'Will eventually show help for ' + module;
};

var parse = function (args) {
    if (args.message.match(expression)) {

        return getHelpText.apply(this, args.message.match(expression));

        // var helpList = modulesWithHelp(args.modules),
        //     result = 'Available commands with help: ';
        // for (var i = 0; i < helpList.length; i++) 
        //     result += helpList[i] + ', ';
        // result = result.substring(0, list.length - 2);

    }

    return null;
};

module.exports = {
    parse: parse
};