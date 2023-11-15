// // client/src/components/ProductList/ProductList.js
// import React, { useEffect, useState } from 'react';
// import './ProductList.css'; // Подключаем стили
//
// const ProductList = () => {
//     const [products, setProducts] = useState([]);
//
//     useEffect(() => {
//         // В этом эффекте мы будем получать данные о продуктах с сервера
//         // и устанавливать их в состояние products
//         fetch('http://localhost:5500/api/products') // Замените на фактический URL вашего сервера
//             .then((response) => response.json())
//             .then((data) => setProducts(data))
//             .catch((error) => console.error('Ошибка при получении данных:', error));
//     }, []);
//
//     return (
//         <div className="product-list-container">
//         <div className="product-list">
//             <h1>Товары с доставкой</h1>
//             <div className="products">
//                 {products.map((product) => (
//                     <div key={product._id} className="product">
//                         <img src={product.image} alt={product.name} />
//                         <h3>{product.name}</h3>
//                         <p>{product.description}</p>
//                         <p>Цена: {product.price} $.</p>
//                         {/* Добавьте дополнительные детали продукта, если нужно */}
//                     </div>
//                 ))}
//             </div>
//         </div>
//         </div>
//     );
// };
//
// export default ProductList;




// // client/src/components/ProductList/ProductList.js
// import React, { useEffect, useState } from 'react';
// import './ProductList.css';
// import ProductDetail from '../ProductDetail/ProductDetail';
//
// const ProductList = () => {
//     const [products, setProducts] = useState([]);
//     const [selectedProduct, setSelectedProduct] = useState(null);
//
//
//     useEffect(() => {
//         // В этом эффекте мы будем получать данные о продуктах с сервера
//         // и устанавливать их в состояние products
//         fetch('http://localhost:5500/api/products') // Замените на фактический URL вашего сервера
//             .then((response) => response.json())
//             .then((data) => setProducts(data))
//             .catch((error) => console.error('Ошибка при получении данных:', error));
//     }, []);
//
//
//     const openProductDetail = (product) => {
//         setSelectedProduct(product);
//     };
//
//     const closeProductDetail = () => {
//         setSelectedProduct(null);
//     };
//
//     return (
//         <div className="product-list">
//             <h2>Список продуктов</h2>
//             <div className="products">
//                 {products.map((product) => (
//                     <div key={product._id} className="product" onClick={() => openProductDetail(product)}>
//                         <img src={product.image} alt={product.name} />
//                         <h3>{product.name}</h3>
//                         <p>{product.description}</p>
//                         <p>Цена: {product.price} $.</p>
//                     </div>
//                 ))}
//             </div>
//
//             {/* Отображаем окно ProductDetail, если выбран товар */}
//             {selectedProduct && (
//                 <ProductDetail product={selectedProduct} onClose={closeProductDetail} />
//             )}
//         </div>
//     );
// };
//
// export default ProductList;


// /// client/src/components/ProductList/ProductList.js  !!!!
// import React, { useEffect, useState } from 'react';
// import './ProductList.css';
// import ProductDetail from '../ProductDetail/ProductDetail';
//
// const ProductList = ({ searchTerm }) => {
//     const [products, setProducts] = useState([]);
//     const [selectedProduct, setSelectedProduct] = useState(null);
//
//     useEffect(() => {
//         // В этом эффекте мы будем получать данные о продуктах с сервера
//         // и устанавливать их в состояние products
//         fetch('http://localhost:5500/api/products') // Замените на фактический URL вашего сервера
//             .then((response) => response.json())
//             .then((data) => setProducts(data))
//             .catch((error) => console.error('Ошибка при получении данных:', error));
//     }, []);
//
//     const filteredProducts = products.filter((product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//
//     const handleProductClick = (product) => {
//         setSelectedProduct(product);
//     };
//
//     const handleCloseProductDetail = () => {
//         setSelectedProduct(null);
//     };
//
//     return (
//         <div className="product-list">
//             <h2>Список продуктов</h2>
//             <div className="products">
//                 {filteredProducts.map((product) => (
//                     <div
//                         key={product._id}
//                         className="product"
//                         onClick={() => handleProductClick(product)}
//                     >
//                         <img src={product.image} alt={product.name} />
//                         <h3>{product.name}</h3>
//                         <p>{product.description}</p>
//                         <p>Цена: {product.price} $.</p>
//                     </div>
//                 ))}
//             </div>
//             {selectedProduct && (
//                 <ProductDetail product={selectedProduct} onClose={handleCloseProductDetail} />
//             )}
//         </div>
//     );
// };
//
// export default ProductList;












// client/src/components/ProductList/ProductList.js
import React, { useEffect, useState } from 'react';
import './ProductList.css';
import ProductDetail from '../ProductDetail/ProductDetail';

const ProductList = ({ searchTerm }) => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        // В этом эффекте мы будем получать данные о продуктах с сервера
        // и устанавливать их в состояние products
        fetch('http://localhost:5500/api/products') // Замените на фактический URL вашего сервера
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Ошибка при получении данных:', error));
    }, []);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleProductClick = (product) => {
        setSelectedProduct(product);
    };

    const handleCloseProductDetail = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="product-list-container">
        <div className="product-list">
            <h1>Список товаров</h1>
            <div className="products">
                {filteredProducts.map((product) => (
                    <div
                        key={product._id}
                        className="product" // убедимся, что здесь правильный className
                        onClick={() => handleProductClick(product)}
                    >
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Цена: {product.price} $.</p>
                    </div>
                ))}
            </div>
            {selectedProduct && (
                <ProductDetail product={selectedProduct} onClose={handleCloseProductDetail} />
            )}
        </div>
        </div>
    );
};

export default ProductList;



