import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const GetProductsThunk = createAsyncThunk("product/get", async () => {
  const response = await axios.get("http://localhost:5000/products");
  return response.data;
});

export const DeleteProductsThunk = createAsyncThunk(
  "product/delete",
  async (id) => {
    const response = await axios.delete(`http://localhost:5000/products/${id}`);
    return response.data;
  }
);

export const AddProductsThunk = createAsyncThunk(
  "product/add",
  async (product) => {
    const response = await axios.post(
      "http://localhost:5000/products",
      product
    );
    return response.data;
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetProductsThunk.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(GetProductsThunk.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
        state.error = false;
      })
      .addCase(GetProductsThunk.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(DeleteProductsThunk.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      })
      .addCase(AddProductsThunk.fulfilled, (state, action) => {
        state.products.push(action.payload);
      });
  },
});

export default ProductSlice.reducer;
