import React from "react";
import styled from "@emotion/styled";
import { Item } from "../types/Item";

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
        <div key={item.foodid}>{item.foodname}</div>
      ))}
    </Container>
  );
};

export default ItemList;
