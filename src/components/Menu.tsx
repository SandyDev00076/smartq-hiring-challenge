import React from "react";
import styled from "@emotion/styled";

import { MainContent, PageTitle } from "../styles/shared";
import useMenu from "../hooks/useMenu";
import Categories from "./Categories";
import { useAppSelector } from "../app/hooks";
import { selectCategory, selectMenuItems } from "../slices/menuSlice";
import ItemList from "./ItemList";
import Cart from "./Cart";
import { selectSearchQuery } from "../slices/searchSlice";
import Banner from "./Banner";

const Layout = styled.div`
  display: flex;
  align-items: start;
  gap: 32px;
`;

const MiddleSection = styled.div`
  flex: 1;
`;

const Menu = () => {
  const { categories } = useMenu();
  const selectedCategory = useAppSelector(selectCategory);
  const items = useAppSelector(selectMenuItems);
  const searchQuery = useAppSelector(selectSearchQuery);

  const filteredItems = selectedCategory
    ? items.filter(
        (item) =>
          item.category.toLocaleLowerCase() ===
          selectedCategory.toLocaleLowerCase()
      )
    : items.filter((item) =>
        item.foodname
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase())
      );

  return (
    <MainContent>
      <PageTitle>Build your Menu</PageTitle>
      <Layout>
        <Categories categories={categories} />
        <MiddleSection>
          {selectedCategory && (
            <Banner
              name={selectedCategory}
              image={
                categories.find(
                  (category) => category.name === selectedCategory
                )?.banner ?? ""
              }
            />
          )}
          <ItemList items={filteredItems} />
        </MiddleSection>
        <Cart />
      </Layout>
    </MainContent>
  );
};

export default Menu;
