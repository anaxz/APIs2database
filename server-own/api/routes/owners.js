const express = require('express');
const router = express.Router();

const ownerController = require('../controllers/owners')

router.get('/:id', ownerController.showOne)
router.get('/:id/cats', ownerController.ownersCats)

module.exports = router;