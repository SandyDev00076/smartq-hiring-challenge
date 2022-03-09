import styled from "@emotion/styled";
import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { Colors } from "../Colors";
import { updateItemQuantity } from "../slices/menuSlice";
import { Item } from "../types/Item";
import Button from "./Button";
import Field from "./Field";
import Input from "./Input";

const Container = styled.div`
  padding: 32px;
  box-shadow: 12.5px 3.9px 10px rgba(0, 0, 0, 0.015),
    100px 31px 80px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  margin-bottom: 24px;
  background-color: ${Colors.white};
`;

const DetailSection = styled.div`
  display: flex;
  gap: 32px;
  padding-bottom: 24px;
  border-bottom: 1px dashed ${Colors.divider};
  margin-bottom: 24px;
`;

const ItemImage = styled.img`
  width: 100px;
  border-radius: 10px;
`;

const TextualData = styled.div`
  flex: 1;
`;

const Name = styled.h3`
  font-size: 1.2rem;
`;

const Description = styled.h4`
  font-size: 0.9rem;
  color: ${Colors.textSecondary};
  margin-bottom: 8px;
`;

const Price = styled.h2`
  font-size: 1.2rem;
  color: ${Colors.primary};
`;

const OptionSection = styled.section`
  display: grid;
  gap: 16px;
  grid-template-columns: 200px auto 200px;
  align-items: end;
`;

const NoteToTheKitchen = styled.div`
  grid-column: 1 / span 2;
`;

interface IItemCardProps {
  item: Item;
}

const ItemCard = ({ item }: IItemCardProps) => {
  const [note, setNote] = useState("");
  const dispatch = useAppDispatch();

  return (
    <Container>
      <DetailSection>
        <ItemImage src={item.imageurl} alt={`${item.foodname}-image`} />
        <TextualData>
          <Name>{item.foodname}</Name>
          <Description>{item.fooddescription}</Description>
          <Button small>Add ons</Button>
        </TextualData>
        <Price>${item.price}</Price>
      </DetailSection>
      <OptionSection>
        <Field label="Quantity">
          <Input
            full
            type="number"
            min={0}
            value={item.quantity}
            onChange={(e) =>
              dispatch(
                updateItemQuantity({
                  id: item.foodid,
                  quantity: parseInt(e.target.value),
                })
              )
            }
          />
        </Field>
        <Field label="Session">
          <Input full />
        </Field>
        <Field label="Sub Total">
          <Input full readOnly value={`$${item.price * item.quantity}`} />
        </Field>
        <NoteToTheKitchen>
          <Field label="Note to the kitchen">
            <Input
              full
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </Field>
        </NoteToTheKitchen>
        <Button style={{ height: "48px" }} small>
          Add to cart
        </Button>
      </OptionSection>
    </Container>
  );
};

export default ItemCard;
