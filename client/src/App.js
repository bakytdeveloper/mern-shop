// // client/src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Header from './components/Header/Header';
// import Sidebar from "./components/Sidebar/Sidebar";
//
// function App() {
//   return (
//       <Router>
//         <Header />
//
//         <Sidebar />
//       </Router>
//   );
// }
//
// export default App;


//
// // client/src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Header from './components/Header/Header';
// import Sidebar from './components/Sidebar/Sidebar';
// import ProductListPage from './components/ProductList/ProductList';
//
// function App() {
//     return (
//         <Router>
//             <Header />
//             <div style={{ display: 'flex' }}>
//                 <Sidebar />
//                 <Switch>
//                     <Route path="/products">
//                         <ProductListPage />
//                     </Route>
//                     {/* Добавьте другие маршруты по мере необходимости */}
//                 </Switch>
//             </div>
//         </Router>
//     );
// }
//
// export default App;




// // client/src/App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Header from './components/Header/Header';
// import Sidebar from "./components/Sidebar/Sidebar";
// import ProductList from "./components/ProductList/ProductList";
//
// function App() {
//     const [searchFilter, setSearchFilter] = useState('');
//
//     const handleSearchChange = (value) => {
//         setSearchFilter(value);
//     };
//
//     return (
//         <Router>
//             <Header onSearchChange={handleSearchChange} />
//             <Sidebar />
//             <ProductList searchFilter={searchFilter} />
//         </Router>
//     );
// }
//
// export default App;




// // client/src/App.js!!
// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Header from './components/Header/Header';
// import Sidebar from './components/Sidebar/Sidebar';
// import ProductList from './components/ProductList/ProductList';
// import ProductDetail from './components/ProductDetail/ProductDetail';
//
// function App() {
//     return (
//         <Router>
//             <Header />
//             <Sidebar />
//
//             <Switch>
//                 <Route path="/product/:productId">
//                     <ProductDetail />
//                 </Route>
//                 <Route path="/">
//                     <ProductList />
//                 </Route>
//             </Switch>
//         </Router>
//     );
// }
//
// export default App;



// client/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ProductList from './components/ProductList/ProductList';

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (term) => {
        setSearchTerm(term);
    };

    return (
        <Router>
            <Header onSearchChange={handleSearchChange} />
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <ProductList searchTerm={searchTerm} />
            </div>
        </Router>
    );
}

export default App;