import React, { useState } from 'react';
import Header from './components/Header';
import Products from './components/Products';
import { productsContent } from './content';
import './App.css';

const App = () => {
  const [products, setProducts] = useState(productsContent);
  const [productsInCart, setProductsInCart] = useState([]);

  const addProductToCart = (product) => {
    setProductsInCart([...productsInCart, product]);
    console.log(productsInCart); 
  };

  return (
    <>
      <Header count={productsInCart.length}></Header>
      <Products products={products} addProductToCart={addProductToCart}></Products>
    </>
  );
};

export default App;