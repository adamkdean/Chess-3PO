var memory = [];

var parse = function (args) {

    if (args.message.startsWith('!remember') && args.message.length > 10) {
        var item = args.message.substring(10);
        memory.push(item);
        return 'Stored in my transient list!';
    }

    if (args.message.startsWith('!recall')) {
        var msg = '';
        for(var i = 0; i < memory.length; i++) {
            msg += memory[i] + ', ';
        }
        return 'Memory: ' + msg;
    }

    return null;
};

module.exports = {
    parse: parse
};