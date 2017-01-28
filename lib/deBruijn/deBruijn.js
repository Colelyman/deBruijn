/**
 * Creating the router definitions for the de Bruijn page.
 */

var router = require('express').Router({ mergeParams: true });
var path = require('path');
module.exports = router;
var multer = require('multer');

var upload = multer().single('file');

router.callbacks = require('./controllers/deBruijn');
router.models = require('./models');

router.get('/', router.callbacks.getDeBruijn);

router.post('/', upload, router.callbacks.uploadFile);
