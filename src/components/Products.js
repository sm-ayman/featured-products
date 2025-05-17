import React from "react";

const Products = ({ name, price, image, children }) => {
  const showDescription = () => {
    alert(children);
  };
  return (
    <div className="card h-100">
      <img className="card-img-top p-3" src={image} alt={name} />
      <div className="card-body d-flex flex-column ">
        <h4 className="card-title">{name}</h4>
        {/* <div className="card-subtitle">
          {children}
        </div> */}
        <p className="card-text mt-auto fw-bold">Price: ${price} BDT</p>
        <button className="btn btn-info" onClick={showDescription}>
          Show Description
        </button>
      </div>
    </div>
  );
};

export default Products;
