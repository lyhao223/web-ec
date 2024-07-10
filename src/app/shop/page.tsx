"use client";

import { Fragment } from "react";
import ShopPage from "../UI/Component/ShopPage/ShopPage";
import ReduxProvider from "../services/redux/provider";

export default function Home() {
  return (
    <Fragment>
      <ReduxProvider>
      <ShopPage />
      </ReduxProvider>
    </Fragment>
  );
}