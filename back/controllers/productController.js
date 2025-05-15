

import Product from "../models/productModel.js";
const getProduct = async (req, res) => {
    const product = await Product.find();
    res.json(product);
}

const createProduct = async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json();
}

const deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json();
}

export {
    getProduct,
    createProduct,
    deleteProduct
}