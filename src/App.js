import React from "react";
// import Products from "./components/Products";
import Heading from "./components/Heading";
import ProductList from "./components/ProductList";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const App = () => {
  return (
    <div>
      <Heading />
      <ProductList />
    </div>
  );
};

export default App;
