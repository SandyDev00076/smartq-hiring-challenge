import styled from "@emotion/styled";
import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { DeleteIcon, EmptyCartIcon } from "../assets/icons";
import { Colors } from "../Colors";
import {
  clearCart,
  removeFromCart,
  selectCartItems,
} from "../slices/cartSlice";
import { getTotalCostFromItems } from "../utils.ts";
import Button from "./Button";

const Container = styled.section`
  border-radius: 10px;
  overflow: hidden;
  width: 400px;
  box-shadow: 12.5px 3.9px 10px rgba(0, 0, 0, 0.015),
    100px 31px 80px rgba(0, 0, 0, 0.03);
`;

const Header = styled.header`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${Colors.primary};
  color: ${Colors.white};

  & > button > svg {
    color: ${Colors.white};
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white};
  height: 60vh;
  padding: 16px;
`;

const ItemsArea = styled.div`
  flex: 1;
  display: grid;
  gap: 8px;
  grid-template-columns: auto 60px 60px 40px;
  grid-auto-rows: max-content;
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

const GridHeader = styled.h6`
  color: ${Colors.textSecondary};
  font-size: 0.8rem;
`;

const ItemDetail = styled.div`
  font-size: 0.9rem;
`;

const RemoveButton = styled.button`
  background: transparent;
  padding: 0;
  & > svg {
    fill: ${Colors.textSecondary};
  }
  &:hover {
    & > svg {
      fill: ${Colors.primary};
    }
  }
`;

const ClearCartButton = styled(RemoveButton)`
  & > svg {
    fill: ${Colors.primaryLight};
  }
  &:hover {
    & > svg {
      fill: ${Colors.white};
    }
  }
`;

const EmptyCartContainer = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
`;

const EmptyCartPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  font-weight: bold;
  color: ${Colors.primaryLight};

  & > svg {
    height: 72px;
    width: auto;
    fill: ${Colors.primaryLight};
    margin-bottom: 8px;
  }
`;

const Cart = () => {
  const cartItems = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Header>
        <span>Cart Summary</span>
        <ClearCartButton onClick={() => dispatch(clearCart())}>
          <DeleteIcon />
        </ClearCartButton>
      </Header>
      <Content>
        {cartItems.length === 0 ? (
          <EmptyCartContainer>
            <EmptyCartPanel>
              <EmptyCartIcon />
              <span>Your cart is empty</span>
            </EmptyCartPanel>
          </EmptyCartContainer>
        ) : (
          <>
            <ItemsArea>
              <GridHeader>Item</GridHeader>
              <GridHeader>Qty</GridHeader>
              <GridHeader>Sub Total</GridHeader>
              <div />
              {cartItems.map((item) => (
                <React.Fragment key={item.foodid}>
                  <ItemDetail>
                    <strong>{item.foodname}</strong>
                  </ItemDetail>
                  <ItemDetail>{item.quantity}</ItemDetail>
                  <ItemDetail>{item.quantity * item.price}</ItemDetail>
                  <RemoveButton
                    onClick={() => dispatch(removeFromCart(item.foodid))}
                  >
                    <DeleteIcon />
                  </RemoveButton>
                </React.Fragment>
              ))}
            </ItemsArea>
            <ProceedArea>
              <CartTotal>
                Total amount: $ {getTotalCostFromItems(cartItems)}
              </CartTotal>
              <Button full>Proceed</Button>
            </ProceedArea>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Cart;
