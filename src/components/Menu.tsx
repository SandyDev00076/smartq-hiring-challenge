import React from "react";
import styled from "@emotion/styled";

import { MainContent, PageTitle } from "../styles/shared";

const Layout = styled.div`
  display: flex;
  gap: 32px;
`;

const Menu = () => {
  return (
    <MainContent>
      <PageTitle>Build your Menu</PageTitle>
      <Layout></Layout>
    </MainContent>
  );
};

export default Menu;
