const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.create);
router.get('/', controller.index);
router.get('/:id', controller.show);
router.delete('/:id', controller.delete);

module.exports = router;
