import styled from "@emotion/styled";
import React from "react";
import { Colors } from "../Colors";
import { Item } from "../types/Item";

const Container = styled.div`
  padding: 32px;
  box-shadow: 3.6px 4.4px 10px rgba(0, 0, 0, 0.06),
    29px 35px 80px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  margin-bottom: 24px;
`;

const DetailRow = styled.div`
  display: flex;
  gap: 32px;
`;

const ItemImage = styled.img`
  width: 100px;
  border-radius: 10px;
`;

const MiddleSection = styled.div`
  flex: 1;
`;

const Name = styled.h3`
  font-size: 1.2rem;
`;

const Description = styled.h4`
  font-size: 1rem;
  color: ${Colors.textSecondary};
`;

const Price = styled.h2`
  font-size: 1.2rem;
  color: ${Colors.primary};
`;

interface IItemCardProps {
  item: Item;
}

const ItemCard = ({ item }: IItemCardProps) => {
  return (
    <Container>
      <DetailRow>
        <ItemImage src={item.imageurl} alt={`${item.foodname}-image`} />
        <MiddleSection>
          <Name>{item.foodname}</Name>
          <Description>{item.fooddescription}</Description>
        </MiddleSection>
        <Price>${item.price}</Price>
      </DetailRow>
    </Container>
  );
};

export default ItemCard;
