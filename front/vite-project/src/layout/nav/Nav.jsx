import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router";

const Nav = () => {
  return (
    <div className={styles.container}>
      <nav>
        <i className={`fa-solid fa-bars ${styles.bars}`}></i>
        <Link to="/">
          {" "}
          <img
            src="https://preview.colorlib.com/theme/aranoz/img/logo.png.webp"
            alt=""
          />
        </Link>

        <div className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/wish">Wish</Link>
          <Link to="/admin">Admin</Link>
        </div>
        <div className={styles.icons}>
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <Link to="/wish">
            <i className="fa-regular fa-heart"></i>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
