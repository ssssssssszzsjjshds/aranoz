import React from "react";
import styles from "./SecFour.module.css";

const SecFour = () => {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <p>JOIN OUR NEWSLETTER</p>
        <h1>Subscribe to get Updated with new offers</h1>
        <div className={styles.row}>
          <input type="text" placeholder="Enter email address" />
          <button>Subscribe Now</button>
        </div>
      </div>
    </div>
  );
};

export default SecFour;
