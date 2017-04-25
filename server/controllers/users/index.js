const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.create);
router.get('/', controller.index);


module.exports = router;

