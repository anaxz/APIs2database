const express = require('express');
const router = express.Router();

const catController = require('../controllers/cats')

router.get('/', catController.showAll);
router.get('/:id', catController.showOne);
router.post('/', catController.create);
router.patch('/:id', catController.update);
router.delete('/:id', catController.destroy)

module.exports = router;