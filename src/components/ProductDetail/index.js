import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {

    // Get the userId param from the URL.
    let params = useLocation();
    let data = params.state.data;

  return (
    <div className="d-flex justify-content-center my-5">
      <div className="mx-4">
      <img src={data.image} width={300} height={300} className="product-image" />
      </div>
      <div className="d-flex justify-content-center align-items-center " style={{flexDirection: "column"}}>
      <p>{data.title}</p>
      <button>Add to Cart</button>
      </div>
    </div>
  );
};
export default ProductDetail;
