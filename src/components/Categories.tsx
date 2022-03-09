import styled from "@emotion/styled";
import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Colors } from "../Colors";
import { selectCategory, updateCategory } from "../slices/menuSlice";
import { Category } from "../types/Category";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-right: 3px solid ${Colors.divider};
`;

interface CategoryItemProps {
  selected: boolean;
}

const CategoryItem = styled.button<CategoryItemProps>`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  background: transparent;
  opacity: ${(props) => (props.selected ? 1 : 0.4)};

  & > img {
    height: 40px;
    width: auto;
  }

  & > h2 {
    color: ${Colors.primary};
    font-size: 0.8rem;
  }
`;

interface ICategoriesProps {
  categories: Category[];
}

const Categories = (props: ICategoriesProps) => {
  const selectedCategory = useAppSelector(selectCategory);
  const dispatch = useAppDispatch();

  return (
    <Container>
      {props.categories.map((category) => (
        <CategoryItem
          selected={selectedCategory === category.name}
          key={category.name}
          onClick={() => dispatch(updateCategory(category.name))}
        >
          <img src={category.icon} alt={`${category.name}-icon`} />
          <h2>{category.name}</h2>
        </CategoryItem>
      ))}
    </Container>
  );
};

export default Categories;
