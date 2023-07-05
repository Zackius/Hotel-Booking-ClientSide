import React from "react";
import { Product, ProductImage } from "../../styles/product";
import ProductMeta from "./ProductMeta";

const SingleProduct = ({ products, matches }) => {
  return (
    <Product>
      <ProductImage src={products.image} />
      <ProductMeta products={products} matches={matches} />
    </Product>
  );
};

export default SingleProduct;
