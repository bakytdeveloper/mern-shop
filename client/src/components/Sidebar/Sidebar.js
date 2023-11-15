// src/components/Sidebar/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const categories = ['IPad', 'IPhone', 'Смартфоны', 'Ноутбуки', 'Телевизоры', 'Мониторы'];

    return (
        <div className="sidebar">
            <h2>Категории</h2>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>
                        <Link to={`/category/${category}`}>{category}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
