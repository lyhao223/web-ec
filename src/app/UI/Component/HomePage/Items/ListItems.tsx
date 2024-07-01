import React from "react";
import MenuListItems from "./MenuListItems";
import ReduxProvider from "@/app/services/redux/provider";

const ListItems = () => {
  return (
    <ReduxProvider>
      <section id="list_items" className="my-12">
        <MenuListItems />
      </section>
    </ReduxProvider>
  );
};

export default ListItems;
