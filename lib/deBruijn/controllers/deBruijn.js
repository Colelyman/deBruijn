var exports = module.exports;

var deBruijn = require('../models/deBruijn');

exports.getDeBruijn = function(req, res) {
    var context = {
        siteTitle: "Visualize de Bruijn Graphs using d3.js",
        githubURL: "https://github.com/Colelyman/deBruijn"
    };

    var template = __dirname + '/../views/deBruijn';
    res.render(template, context);
};
