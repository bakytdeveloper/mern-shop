const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.getAllProducts);
router.post('/add', productsController.addProduct);
router.delete('/delete/:id', productsController.deleteProduct);

module.exports = router;
