import styled from "@emotion/styled";
import React from "react";
import { MainContent, PageTitle } from "../styles/shared";
import EventDetail from "./EventDetail";
import PaymentMethod from "./PaymentMethod";

const Content = styled.div`
  display: flex;
  gap: 32px;
`;
const OrderDetails = () => {
  return (
    <MainContent>
      <PageTitle>Order Details</PageTitle>
      <Content>
        <EventDetail />
        <PaymentMethod />
      </Content>
    </MainContent>
  );
};

export default OrderDetails;
