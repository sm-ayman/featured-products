import React from "react";
import Products from "./Products";
import items from "../data/items";

const ProductList = () => {
  // const callback = (e,i) =>{
  //     return <Products {...e} />
  // }
  // const newProducts = products.map(callback);
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 row-cols-xl-5 g-3">
        {" "}
        {items.map((e) => {
          // return <Products {...e} key={e.id} />;
          return (
            <div className="col">
              <Products {...e} key={e.id}>
                {e.description}
              </Products>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
