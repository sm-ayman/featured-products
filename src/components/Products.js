import React from 'react';

const Products = ({name, price}) => {
   // const {name, price} = props;
    return (
        <div>
            <h2>Image</h2>
            <h3>{name}</h3>
            <h4>{price}</h4>
        </div>
    );
};

export default Products;