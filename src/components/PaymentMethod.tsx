import styled from "@emotion/styled";
import React from "react";
import { useAppSelector } from "../app/hooks";
import { Colors } from "../Colors";
import { selectCartItems } from "../slices/cartSlice";
import { getTotalCostFromItems } from "../utils.ts";
import Button from "./Button";

const Container = styled.section`
  border-radius: 10px;
  overflow: hidden;
  width: 400px;
`;

const Header = styled.h1`
  font-size: 1.5rem;
  color: ${Colors.primary};
  margin-bottom: 24px;
`;

const Content = styled.h1`
  box-shadow: 12.5px 3.9px 10px rgba(0, 0, 0, 0.015),
    100px 31px 80px rgba(0, 0, 0, 0.03);
  background-color: ${Colors.white};
  padding: 32px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 50vh;
`;

const ProceedArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CartTotal = styled.h2`
  font-size: 0.8rem;
  margin-bottom: 8px;
`;

const PaymentsArea = styled.div`
  flex: 1;
`;

const PaymentMethod = () => {
  const cartItems = useAppSelector(selectCartItems);
  return (
    <Container>
      <Header>Select Payment Method</Header>
      <Content>
        <PaymentsArea></PaymentsArea>
        <ProceedArea>
          <CartTotal>
            Total amount: $ {getTotalCostFromItems(cartItems)}
          </CartTotal>
          <Button full>Make Payment</Button>
        </ProceedArea>
      </Content>
    </Container>
  );
};

export default PaymentMethod;
