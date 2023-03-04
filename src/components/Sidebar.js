import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <ul className="side-bar">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/products">
            Get All Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/categories">
            Get All Categories
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
