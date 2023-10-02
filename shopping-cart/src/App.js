import React from 'react';
import '../src/cart/style.css';
import ProductItem from './ProductItem'; // Adjust the path based on your project structure

const App = () => {
  const products = [
    // Your product data
  ];

  return (
    <div className="container">
      <header>
        <h1>Your Shopping Cart</h1>
        <div className="shopping">
          <img src="image/shopping.svg" alt="Shopping Cart" />
          <span className="quantity">0</span>
        </div>
      </header>

      <div className="list">
        {products.map((product, index) => (
          <ProductItem key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
