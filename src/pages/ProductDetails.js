import React from "react";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  let { productID } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/products/${productID}`)
      .then((res) => res.json())
      .then((data) => setProductDetails(data));
  }, []);

  return (
    <>
      <div className="productDetails-card" key={productDetails.id}>
        <h1>{productDetails.id}</h1>
        <img
          src={productDetails.image}
          classNameName="productDetails-img"
          alt={productDetails.title}
        />
        <div className="card-body">
          <h5 className="card-title">{productDetails.title}</h5>
          <p className="card-text">{productDetails.description}</p>
          <h1>{productDetails.price}</h1>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
