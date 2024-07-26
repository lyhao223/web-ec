"use client";
import { Fragment } from "react";
import ShopPage from "../UI/Component/ShopPage/ShopPage";
import ReduxProvider from "../services/redux/provider";
import ProductDetail from "./productID/[id]/page";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shopping with every products",
};
export default function Home() {
  return (
    <Fragment>
      <ReduxProvider>
        <ShopPage />
      </ReduxProvider>
    </Fragment>
  );
}
