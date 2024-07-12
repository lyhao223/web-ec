// src/app/shop/detail/[slug].tsx
"use client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/services/redux/store";
import { fetchDetailProduct } from "@/app/services/redux/slices/productDetailSlice";

const ProductDetail = ({ params }: { params: { id: any } }) => {
  const { status, product } = useSelector((state: RootState) => state.productDetailSlice);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchDetailProduct(params.id));
  }, [dispatch, params.id]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error loading product details</div>;
  }

  return (
    <div className="p-48 text-black">
      {product ? (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} />
        </div>
      ) : (
        <div>No product found</div>
      )}
    </div>
  );
};

export default ProductDetail;
