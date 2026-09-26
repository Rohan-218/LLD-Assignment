import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          LLD Practice
        </Link>

        <div className="nav-links">
          <Link to="/problems">Problems</Link>
          <Link to="/history">History</Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;