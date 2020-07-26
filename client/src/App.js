import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import AddProduct from './components/AddProduct'
import ProductList from './components/ProductList'

function App() {
  return (
    <div className="container">
      <Router>
        <nav className="navbar navbar-default">
            <ul className="nav">
              <li className="active" style={{paddingRight:'1em'}}><Link to="/">Products</Link></li>
              <li><Link to="/add">Add product</Link></li>
            </ul>
        </nav>
        
          <Route exact path='/' component={ProductList}></Route>
          <Route exact path='/add' component={AddProduct}></Route>
        </Router>
    </div>
  );
}

export default App;
