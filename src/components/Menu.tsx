import React from "react";
import styled from "@emotion/styled";

import { MainContent, PageTitle } from "../styles/shared";
import useMenu from "../hooks/useMenu";
import Categories from "./Categories";
import { useAppSelector } from "../app/hooks";
import { selectMenuItems } from "../slices/menuSlice";
import ItemList from "./ItemList";

const Layout = styled.div`
  display: flex;
  gap: 32px;
`;

const Menu = () => {
  const { categories } = useMenu();
  const items = useAppSelector(selectMenuItems);

  return (
    <MainContent>
      <PageTitle>Build your Menu</PageTitle>
      <Layout>
        <Categories categories={categories} />
        <ItemList items={items} />
      </Layout>
    </MainContent>
  );
};

export default Menu;
