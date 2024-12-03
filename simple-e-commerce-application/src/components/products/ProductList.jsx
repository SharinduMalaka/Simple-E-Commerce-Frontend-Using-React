import React from "react";
import products from "../products";

const ProductList = () => {
  return (
    

    <div className="container">
    <h2>Our Products</h2>
    <div className="grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p><strong>${product.price}</strong></p>
          <button>Add to Cart</button>
        </div>


      ))}
      </div>
    </div>
  );
};

export default ProductList;
