var util = require('util'); // TODO delete?
var fileUpload = require('express-fileupload');

function DeBruijn() {}

DeBruijn.prototype.uploadFile = function(req, res) {
    var file;

    if (!req.files) {
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
    });
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
