import React from "react";
import {useNavigate} from "react-router-dom"

const ProductCard = (props) => {

  let navigate = useNavigate();

  let { data } = props;
  let { image, title} = data;
  return (
    <div onClick={() => navigate(`/productDetail`, {state: {data}})}>
      <div className="product-card">
        <img src={image} width={100} height={100} className="product-image" />
        <p className="product-name truncate">{title}</p>
      </div>
    </div>
  );
};
export default ProductCard;
