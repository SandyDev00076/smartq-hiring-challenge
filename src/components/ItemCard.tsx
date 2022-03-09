import styled from "@emotion/styled";
import React from "react";
import { Item } from "../types/Item";

const Container = styled.div`
  padding: 16px;
  box-shadow: 3.6px 4.4px 10px rgba(0, 0, 0, 0.06),
    29px 35px 80px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
`;

const DetailRow = styled.div`
  display: flex;
  gap: 16px;
`;

const ItemImage = styled.img`
  width: 64px;
  height: auto;
`;

const Name = styled.h3`
  font-size: 1.2rem;
`;

interface IItemCardProps {
  item: Item;
}

const ItemCard = ({ item }: IItemCardProps) => {
  return (
    <Container>
      <DetailRow>
        <ItemImage src={item.imageurl} alt={`${item.foodname}-image`} />
        <div>
          <Name>{item.foodname}</Name>
        </div>
      </DetailRow>
    </Container>
  );
};

export default ItemCard;
