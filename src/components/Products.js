import React from "react";

const Products = ({ name, price, image, children }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <img
        src={image}
        alt={name}
        
      />
      <h3>{name}</h3>
      <h4>{price} BDT</h4>
      {children}
    </div>
  );
};

export default Products;
