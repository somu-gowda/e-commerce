import React, { useState, useEffect } from "react";
import Products from "../Products";

const Categories = () => {
  const [category, setCategory] = useState("");
  const [item, setItem] = useState("electronics");

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((data) => data.json())
      .then((response) => {
        setCategory(response);
      });
  };

  const handleCategory = (data) => {
    setItem(data);
  };

  return (
    <>
    <div className="alignItem">
      <h2>Higer range of products</h2>
    </div>
      <div className="alignItem" >
        {Array.isArray(category) &&
          category.map((data) => (
            <button className="p-2 m-4 button" onClick={() => handleCategory(data)}>{data}</button>
          ))}
      </div>
      <div className="alignItem">
        <Products item={item} />
      </div>
    </>
  );
};
export default Categories;
