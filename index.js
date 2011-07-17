var traverse = require('traverse');

var arrayify = module.exports = function (obj) {
    var keys = Object.keys(obj);
    if (keys.every(function (key) {
        return key.match(/^\d+$/);
    })) {
        obj.length = keys.length;
        return [].slice.call(obj);
    }
    else return obj;
};

arrayify.deep = function () {
    return traverse.map(function (node) {
        return arrayify(node);
    });
};
