import React from "react";
import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const api_url = "http://localhost:3001/products";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const deleteProduct = (product) => {
    Swal.fire({
      title: `Are you Sure To Delete ${product.title} ?`,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        fetch(`http://localhost:3001/products/${product.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            getAllProducts();
          });
      }
    });
  };

  return (
    <>
      <h1> Products Page </h1>

      <Link
        to={"/products/add"}
        className="products-btn btn btn-success m-0 mt-2"
      >
        Add New Product
      </Link>

      <table class="table table-striped table-bordered mt-3">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                {/* <th scope="row">1</th> */}
                <td>{product.id}</td>
                <td>{product.title.slice(0, 20)} ...</td>
                <td>{product.category}</td>
                <td>{product.price} $</td>
                <td>
                  <button
                    onClick={() => deleteProduct(product)}
                    className="products-btn btn btn-danger btn-sm"
                  >
                    Delete
                  </button>

                  <Link
                    to={`/products/${product}`}
                    className="products-btn btn btn-info btn-sm"
                  >
                    View
                  </Link>

                  <button className="products-btn btn btn-primary btn-sm">
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Products;
