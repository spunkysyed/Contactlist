import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark px-4 py-2 w-100">
      <div className="d-flex justify-content-between w-100">
        <Link to="/" className="navbar-brand ml-5 text-primary">
          CONTACT<span className="text-secondary">LIST</span>
        </Link>
        <div className=" text-end">
          <Link to="/add" className="btn text-primary fs-2 fw-bold">
          <i class="fa fa-plus"></i>
          </Link>
        </div>
      </div>
    </nav>
    <hr className="border border-3 border-dark rounded-4 mb-5"/>
    </>
  );
};

export default Navbar;
