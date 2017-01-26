var util = require('util'); // TODO delete?

function DeBruijn() {}

DeBruijn.prototype.file = function(fileName) {
    var file = fileName || "default.dot";
    return file;
};

DeBruijn.prototype.find = function(id) {
    var lookupby = id;
    return lookupby;
};

DeBruijn.prototype.save = function() {
    // TODO
};

DeBruijn.prototype.delete = function() {
    // TODO
};
