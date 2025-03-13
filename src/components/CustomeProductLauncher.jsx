import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loading from "./Loading";

const CustomeProductLauncher = ({ title, data , loading }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    if (data) setProduct(data);
  }, [data]);

  return (
    <div className="custome_product_launcher">
      <h2 className="title">{title}</h2>
      <div className="row pt-5 pb-5">
        {loading ? <Loading /> : product?.map((p, i) => {
          return (
            <div className="col-lg-3" key={i}>
              <ProductCard product={p} />
            </div>
          );
        })}
      </div>
      <button className="custome_btn">View All</button>
      
    </div>
  );
};

export default CustomeProductLauncher;
