import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const Products = (props) => {
    let { item } = props;
    const [product, setProduct] = useState();

    useEffect(() => {
        getProductsList();
    },[item])

   const getProductsList = async () => {
       fetch(`https://fakestoreapi.com/products/category/${item}`).then(data => data.json())
       .then(response => {
        setProduct(response);
           });
    }

    return(
        <div className='products-container'>
            {Array.isArray(product) && product.map(data =>
            <ProductCard data={data} />
)}
        </div>
    )
}
export default Products;