var traverse = require('traverse');

var quack = module.exports = function (obj) {
    if (typeof obj !== 'object') return obj;
    
    if (!obj.hasOwnProperty('0')) return obj;
    var keys = Object.keys(obj);
    if (keys.length === 0) return obj;
    
    var allNumbers = keys.every(function (key) {
        return key.match(/^\d+$/);
    });
    if (!allNumbers) return obj;
    
    var max = Math.max.apply(null, keys);
    
    for (var i = 0; i < keys.length; i++) {
        var key = parseInt(keys[i], 10);
        if (key !== max && !obj.hasOwnProperty(key+1)) {
            return obj; // not contiguous
        }
    }
    
    obj.length = keys.length;
    return [].slice.call(obj);
};

quack.deep = function (obj) {
    return traverse(obj).map(quack);
};
