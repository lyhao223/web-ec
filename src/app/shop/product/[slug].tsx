// src/app/shop/detail/[slug].tsx
"use client";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/services/redux/store";

const ProductDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = useSelector((state: RootState) =>
    state.productShop.products.find((product: any) => product.id === slug)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p>Price: {product.price}$</p>
    </div>
  );
};

export default ProductDetail;
