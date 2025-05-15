import React from "react";
import styles from "./SecOne.module.css";

const SecOne = () => {
  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <h1>Wood & Cloth Sofa</h1>
        <p>
          Incididunt ut labore et dolore magna aliqua quis ipsum suspendisse
          ultrices gravida. Risus commodo viverra
        </p>
        <button>Buy Now</button>
      </div>
      <div className={styles.img}>
        <img
          src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SecOne;
