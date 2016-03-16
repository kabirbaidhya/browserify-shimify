
var transformTools = require('browserify-transform-tools');

var config = {
    evaluateArguments: true,
    jsFilesOnly: true
};

// A flexible shim transform for browserify
var shimify = transformTools.makeRequireTransform(
    'shimify', config,
    function(args, opts, cb) {
        var shimmedModules = opts.config || {};
        var moduleName = args[0];
        var shim = shimmedModules[moduleName];

        if (typeof shim === 'undefined') {
            return cb();
        } else {
            return cb(null, '(' + shim + ')');
        }
    }
);

module.exports = shimify;
