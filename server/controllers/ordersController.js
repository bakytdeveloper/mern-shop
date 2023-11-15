const Order = require('../models/Order');

const getPreOrders = async (req, res) => {
    try {
        // Логика получения предварительных покупок
        const preOrders = await Order.find({ status: 'pre-order' });
        res.json(preOrders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getOrderHistory = async (req, res) => {
    try {
        // Логика получения истории заказов пользователя
        const userId = req.user.userId; // Доступ к идентификатору пользователя из токена
        const orderHistory = await Order.find({ userId });
        res.json(orderHistory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getPreOrders,
    getOrderHistory,
};
