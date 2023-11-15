// client/src/components/ProductDetail/ProductDetail.js
import React from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product, onClose }) => {
    return (
        <div className="product-detail">
            <div className="product-detail-header">
                <h2>{product.name}</h2>
                {/*<button onClick={onClose}>Закрыть</button>*/}
            </div>
            <div className="product-detail-content">
                <div className="product-detail-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="product-detail-info">
                    <p>{product.description}</p>
                    {/* Добавьте дополнительные детали продукта */}
                    <p>Производитель: {product.manufacturer}</p>
                    <p>Год производства: {product.year}</p>
                    {/* Добавьте другие характеристики продукта */}
                </div>
            </div>
            <div className="product-detail-footer">
                <button onClick={onClose}>Вернуться</button>
                <button>Заказать</button>
            </div>
        </div>
    );
};

export default ProductDetail;
