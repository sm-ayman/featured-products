import React from "react";
import Products from "./Products";
import items from "../data/items";

const ProductList = () => {
  // const callback = (e,i) =>{
  //     return <Products {...e} />
  // }
  // const newProducts = products.map(callback);
  return (
    <div>
      {items.map((e) => {
        return <Products {...e} key={e.id} />;
      })}
    </div>
  );
};

export default ProductList;
