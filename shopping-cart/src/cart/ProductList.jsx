import React from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="item">
      <img src={`image/${product.image}`} alt={product.name} />
      <div className="title">{product.name}</div>
      <div className="price">{product.price.toLocaleString()}</div>
      <button onClick={() => onAddToCart(product)}>Add To Cart</button>
    </div>
  );
};

export default ProductItem;
