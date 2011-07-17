var quack = require('../');
var assert = require('assert');

exports.shallow = function () {
    assert.deepEqual(quack({ 0 : 'a', 1 : 'b' }), [ 'a', 'b' ]);
    
    var obj = { 0 : 'a', 1 : 'b', x : 'c' };
    assert.equal(quack(obj), obj);
};

exports.deep = function () {
    assert.deepEqual(
        quack.deep({
            0 : { 0 : 'a', 1 : 'b', 2 : 'c' },
            1 : 'd'
        }),
        [ [ 'a', 'b', 'c' ], 'd' ]
    );
    
    assert.deepEqual(
        quack.deep({
            0 : { 0 : 'a', 1 : 'b', 2 : 'c' },
            1 : 'd'
        }),
        [ [ 'a', 'b', 'c' ], 'd' ]
    );
};

exports.discontiguous = function () {
    var obj = { 0 : 'a', 2 : 'b' };
    assert.equal(quack(obj), obj);
};

exports.indexOffset = function () {
    var obj = { 1 : 'a', 2 : 'b', 3 : 'c' };
    assert.equal(quack(obj), obj);
};
