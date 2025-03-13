import React, { useEffect } from "react";

const ProductCard = ({ product }) => {
    
  return (
    <div className="card">
      <img src={product.thumbnail} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h4 className="card-text">{product.title}</h4>

        <div className="wrapper mt-2">
          <div className="stars" style={{ "--rating": `${product.rating}` }}>          
            <span className="rating">{product.rating}/5</span>
          </div>
        </div>
        {/* <h2 className="mt-2">&#8377; {Math.floor((86.8875*product.price)).toLocaleString()} </h2> */}
        <h2 className="mt-2">$ {product.price} </h2>
      </div>
    </div>
  );
};

export default ProductCard;
