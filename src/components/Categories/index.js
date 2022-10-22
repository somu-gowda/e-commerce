import React, { useState, useEffect } from 'react';
import Products from '../Products';

const Categories = () => {
    const [category, setCategory] = useState("");
    const [item, setItem] = useState("electronics");


    useEffect(() => {
        getCategoryList();
    },[])

   const getCategoryList = async () => {
       fetch("https://fakestoreapi.com/products/categories").then(data => data.json())
       .then(response => {
        setCategory(response);
           })
    }

    const handleCategory = (data) =>{
        setItem(data)
    }

    return(
        <>
        <div>
            {Array.isArray(category) && category.map(data => <button onClick={() =>handleCategory(data)}>{data}</button>
            )}
        </div>
        <div>
                <Products item={item} />

            </div>
            </>
    )

}
export default Categories;