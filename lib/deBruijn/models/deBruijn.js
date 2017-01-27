var util = require('util'); // TODO delete?
var path = require('path');
var fs = require('fs');
var formidable = require('formidable');

function DeBruijn() {}

DeBruijn.prototype.uploadFile = function(req, res) {
    /*var file;

    if (!req.files) {
        console.log(req.files);
        console.log('No files were uploaded.');
        res.send('No files were uploaded.');
        return;
    }

    file = req.files.file;

    console.log(file);

    file.mv('/uploads/file.txt', function(err) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            console.log('File uploaded!');
            res.send('File uploaded!');
        }
    }); */

    console.log('creating IncomingForm');
    var form = new formidable.IncomingForm();
    console.log('created IncomingForm\nparsing form');

    form.parse(req, function(err, fields, files) {
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('receieved upload:\n\n');
        res.end(util.inspect({fields: fields, files: files}));
    });
    console.log('parsed form');

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
