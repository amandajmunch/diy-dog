const router = require('express').Router();

router.use('/api/beers/', require('./controllers/beers'));
router.use('/api/images/', require('./controllers/images'));

module.exports = router;
