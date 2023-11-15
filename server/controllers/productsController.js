const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const addProduct = async (req, res) => {
    try {
        const { name, description, price, image } = req.body;

        const newProduct = new Product({ name, description, price, image });
        await newProduct.save();

        res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        // Удаление товара по ID
        await Product.findByIdAndDelete(productId);

        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getAllProducts,
    addProduct,
    deleteProduct,
};
