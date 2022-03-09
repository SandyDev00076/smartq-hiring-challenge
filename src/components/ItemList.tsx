import React from "react";
import { Item } from "../types/Item";
import ItemCard from "./ItemCard";

interface IItemListProps {
  items: Item[];
}

const ItemList = (props: IItemListProps) => {
  return (
    <section>
      {props.items.map((item) => (
        <ItemCard key={item.foodid} item={item} />
      ))}
    </section>
  );
};

export default ItemList;
