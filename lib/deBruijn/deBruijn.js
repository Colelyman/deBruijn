/**
 * Creating the router definitions for the de Bruijn page.
 */

var router = require('express').Router({ mergeParams: true });
module.exports = router;

router.callbacks = require('./controllers/deBruijn');
router.models = require('./models');

router.get('/', router.callbacks.getDeBruijn);
