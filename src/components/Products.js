import React from "react";
import Swal from "sweetalert2";
const Products = ({ name, price, image, children }) => {
  const showDescription = () => {
    Swal.fire({
      title: name,
      text: children,
      icon: "info",
      confirmButtonText: "Close",
    });
  };
  return (
    <div className="card h-100 border-1">
      <img className="card-img-top p-3" src={image} alt={name} />
      <div className="card-body d-flex flex-column ">
        <h4 className="card-title">{name}</h4>
        {/* <div className="card-subtitle">
          {children}
        </div> */}
        <p className="card-text mt-auto fw-bolder">Price: ${price}</p>
        <button className="btn btn-info" onClick={showDescription}>
          Show Description
        </button>
      </div>
    </div>
  );
};

export default Products;
