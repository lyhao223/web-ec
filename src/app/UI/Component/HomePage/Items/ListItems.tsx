import React from "react";
import MenuListItems from "./MenuListItems";
import ReduxProvider from "@/app/services/redux/provider";
import Items from "./Items";

const ListItems = () => {
  return (
    <ReduxProvider>
      <section id="list_items" className="my-12">
        <MenuListItems />
        <Items />
      </section>
    </ReduxProvider>
  );
};

export default ListItems;
