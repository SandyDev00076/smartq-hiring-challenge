import React from "react";
import styled from "@emotion/styled";
import { Item } from "../types/Item";
import ItemCard from "./ItemCard";

const Container = styled.section`
  flex: 1;
`;

interface IItemListProps {
  items: Item[];
}

const ItemList = (props: IItemListProps) => {
  return (
    <Container>
      {props.items.map((item) => (
        <ItemCard key={item.foodid} item={item} />
      ))}
    </Container>
  );
};

export default ItemList;
