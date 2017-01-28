var util = require('util');
var path = require('path');
var mv = require('mv');

function DeBruijn() {}

DeBruijn.prototype.uploadFile = function(req, res) {
    var file = req.files.file;
    if (file) {
        var ext = file.name.split('.').pop();
        var name = file.name.split('.');
        name.pop();
        mv(
            file.path,
            path.join('public', 'uploads', name + '-' + Date.now() + '.' + ext),
            function(err) {
                console.log(err);
            }
        );
        console.log('File successfully uploaded!');
    }
    else {
        console.log('There is no file :(');
    }
    res.status(204).end();
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

module.exports = new DeBruijn();
