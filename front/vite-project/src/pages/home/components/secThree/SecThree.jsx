import React from "react";
import styles from "./SecThree.module.css";

const SecThree = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h1>Best Sellers </h1>
          <p>Shop</p>
        </div>

        <div className={styles.left}>
          <span>Next |</span>

          <span>Previous</span>
        </div>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <img
            src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png"
            alt=""
          />
          <p>Quartz Belt Watch</p>
          <span>$150.00</span>
        </div>
        <div className={styles.card}>
          <img
            src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png"
            alt=""
          />
          <p>Quartz Belt Watch</p>
          <span>$150.00</span>
        </div>
        <div className={styles.card}>
          <img
            src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png"
            alt=""
          />
          <p>Quartz Belt Watch</p>
          <span>$150.00</span>
        </div>
        <div className={styles.card}>
          <img
            src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png"
            alt=""
          />
          <p>Quartz Belt Watch</p>
          <span>$150.00</span>
        </div>
      </div>
    </div>
  );
};

export default SecThree;
