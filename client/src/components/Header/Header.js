// // client/src/components/Header/Header.js
// import React from 'react';
// import './Header.css'; // Подключаем стили
//
// const Header = () => {
//
//     return (
//         <div className="header">
//             <div className="logo">NurTech</div>
//             <div className="search-bar">
//                 <input
//                     type="text"
//                     placeholder="Поиск товара"
//                     // onChange={handleSearchChange}
//                 />
//             </div>
//             <div className="social-icons">
//                 <img src="/path/to/telegram-icon.png" alt="Telegram" />
//                 <img src="/path/to/instagram-icon.png" alt="Instagram" />
//             </div>
//             <div className="login">
//                 <button>Login</button>
//             </div>
//             <div className="buy">
//                 <button>Купить</button>
//             </div>
//         </div>
//     );
// };
//
// export default Header;



// // client/src/components/Header/Header.js
// import React, { useState } from 'react';
// import './Header.css';
//
// const Header = ({ onSearchChange }) => {
//     const [searchTerm, setSearchTerm] = useState('');
//
//     const handleSearchChange = (e) => {
//         const value = e.target.value;
//         setSearchTerm(value);
//         onSearchChange(value);
//     };
//
//     return (
//         <div className="header">
//             <div className="logo">NurTech</div>
//             <div className="search-bar">
//                 <input
//                     type="text"
//                     placeholder="Поиск товара"
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                 />
//             </div>
//             <div className="social-icons">
//                 <img src="/path/to/telegram-icon.png" alt="Telegram" />
//                 <img src="/path/to/instagram-icon.png" alt="Instagram" />
//             </div>
//             <div className="login">
//                 <button>Login</button>
//             </div>
//             <div className="buy">
//                 <button>Купить</button>
//             </div>
//         </div>
//     );
// };
//
// export default Header;



// client/src/components/Header/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onSearchChange }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        onSearchChange(term);
    };

    return (
        <div className="header">
            <div className="logo">NurTech</div>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Поиск товара"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="social-icons">
                <img src="/path/to/telegram-icon.png" alt="Telegram" />
                <img src="/path/to/instagram-icon.png" alt="Instagram" />
            </div>
            <div className="login">
                <button>Login</button>
            </div>
            <div className="buy">
                <button>Купить</button>
            </div>
        </div>
    );
};

export default Header;
