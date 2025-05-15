import React from "react";
import styles from "./Admin.module.css";
import {
  AddProductsThunk,
  DeleteProductsThunk,
  GetProductsThunk,
} from "../redux/reducers/ProductSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";

const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProductsThunk());
  }, [dispatch]);

  const data = useSelector((state) => state.product.products);

  function Remove(item) {
    dispatch(DeleteProductsThunk(item._id));
  }
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be a positive number")
      .typeError("Price must be a number"),
    image: Yup.string()
      .url("Invalid URL format")
      .required("Image URL is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      image: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(AddProductsThunk(values));
    },
  });
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <form onSubmit={formik.handleSubmit}><div className={styles.row}>
          <input
            placeholder="Name"
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && formik.touched.name && (
            <div className="error">{formik.errors.name}</div>
          )}</div>
<div className={styles.row}>
          <input
            placeholder="Price"
            id="price"
            name="price"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {formik.errors.price && formik.touched.price && (
            <div className="error">{formik.errors.price}</div>
          )}</div>
<div className={styles.row}>
          <input
            placeholder="Image URL"
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
          {formik.errors.image && formik.touched.image && (
            <div className="error">{formik.errors.image}</div>
          )}
</div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className={styles.cards}>
        {data &&
          data.map((item) => (
            <div className={styles.card} key={item._id}>
              <img src={item.image} alt="" />
              <p>{item.name}</p>
              <p>$ {item.price}</p>
              <div className={styles.buttons}>

                <button onClick={() => Remove(item)} className={styles.minus}>
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Admin;
