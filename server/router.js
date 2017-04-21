const router = require('express').Router();

router.use('/api/beers/', require('./controllers/beers'));

module.exports = router;
