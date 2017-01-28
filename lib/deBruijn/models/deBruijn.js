var util = require('util');
var path = require('path');
var fs = require('fs');
var multiparty = require('multiparty');

function DeBruijn() {}

DeBruijn.prototype.uploadFile = function(req, res) {
    var form = new multiparty.Form();
    var file, title;

    form.autoFiles = true; // I think that this will move files to disk

    form.on('error', function(err) {
        console.log(err.stack);
        res.status(err).send('There was an error, abort!');
    });

    form.on('close', function() {
        console.log('in form.on close');
        res.send(format('uploaded %s (%d Kb) as %s',
            file.filename,
            file.size / 1024 | 0,
            title));
    });

    form.on('field', function(name, val) {
        console.log('in form.on field');
        if (name !== 'title') return;
        title = val;
    });

    form.on('part', function(part) {
        console.log('in form.on part');
        if(!part.filename) return;
        console.log('part name', part.name);
        if(part.filename) return part.resume();
        file = {};
        file.filename = part.filename;
        file.size = 0;
        part.on('data', function(buf) {
            file.size += buf.length;
        });
    });

    form.parse(req, function(err, fields, files) {
        //res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload:\n\n');
        res.end(util.inspect({fields: fields, files:files}));
    });

    return;
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
