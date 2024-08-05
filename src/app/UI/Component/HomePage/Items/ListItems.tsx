"use client";
import React from "react";
import MenuListItems from "./MenuListItems";
import Items from "./Items";

const ListItems = () => {
  return (
    <section id="list_items" className="my-12">
      <MenuListItems />
      <Items />
    </section>
  );
};

export default ListItems;
