var traverse = require('traverse');

var quack = module.exports = function (obj) {
    if (typeof obj !== 'object') return obj;
    
    var keys = Object.keys(obj);
    if (keys.every(function (key) {
        return key.match(/^\d+$/);
    })) {
        obj.length = keys.length;
        return [].slice.call(obj);
    }
    else return obj;
};

quack.deep = function (obj) {
    return traverse(obj).map(quack);
};
