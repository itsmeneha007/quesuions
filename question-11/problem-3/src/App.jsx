import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import ProductProvider from './context/ProductContext';

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:productId" component={ProductDetails} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </ProductProvider>
  );
};

export default App