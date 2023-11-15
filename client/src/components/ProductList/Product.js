// client/src/components/ProductList/Product.js
import React from 'react';
import './Product.css';

const Product = ({ product }) => {
    return (
        <div className="product">
            <div className="product-name">{product.name}</div>
            <div className="product-price">{product.price} $</div>
            <button>Add to Cart</button>
        </div>
    );
};

export default Product;
