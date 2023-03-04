import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [title, setTitle] = useState(" ");
  const [price, setPrice] = useState(0);
  let navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/products", {
        title: title,
        price: price,
      })
      .then((data) => {
        console.log(data);
        navigate("/products");
      });

    // fetch("http://localhost:3001/products", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "Application/json",
    //   },
    //   body: JSON.stringify({
    //     title: title,
    //     price: price,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)
    //     navigate("/products");
    //   });
  };

  return (
    <>
      <h1>Add Product Page</h1>

      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="productTitle"
            aria-describedby="Product Title"
            placeholder="Product Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            price
          </label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            aria-describedby="Product Price"
            placeholder="Product Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
};

export default AddProduct;
