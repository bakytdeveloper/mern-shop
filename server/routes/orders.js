const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');

router.get('/pre-orders', ordersController.getPreOrders);
router.get('/order-history', ordersController.getOrderHistory);

module.exports = router;
