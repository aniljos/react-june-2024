import React, { Suspense } from 'react';

import Message from './components/Message';
import Counter from './components/Counter';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import EditProduct from './components/EditProduct';
import GadgetStore from './components/GadgetStore';

//import ListProducts from './components/ListProducts';
const ListProducts = React.lazy(() => import('./components/ListProducts'));

function App() {
  return (

    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div className='container-fluid'>
          <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Navbar</a>
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/counter">Counter</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gadgets">Gadget Store</Link>
                </li>
              </ul>
            </div>
          </nav>

          <main>
            <Routes>
              <Route path='/' element={<Message text='HelloReact' />}></Route>
              <Route path='/counter' element={<Counter initialValue={10} />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/products' element={<ListProducts />}></Route>
              <Route path='/products/:id' element={<EditProduct />}></Route>
              <Route path='/gadgets' element={<GadgetStore />}></Route>
            </Routes>
          </main>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
