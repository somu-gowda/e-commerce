import React from "react";

const ProductCard = (props) =>{
    let {data} = props;
    let {image, title, id} = data;
return(
    <div>
        {/* <Link href={`/product/${slug.current}`}> */}
        <div className='product-card'>
          <img 
            src={image}
            width={100}
            height={100}
            className="product-image"
          />
          <p className='product-name truncate'>{title}</p>
        </div>
    {/* </Link> */}
    </div>
)
}
export default ProductCard;