import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useAppDispatch } from "../app/hooks";
import { SearchIcon } from "../assets/icons";
import { Colors } from "../Colors";
import { updateSearchQuery } from "../slices/searchSlice";

const Container = styled.section`
  position: relative;
  box-shadow: 3.6px 4.4px 10px rgba(0, 0, 0, 0.06),
    29px 35px 80px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  overflow: hidden;
`;
const SearchInput = styled.input`
  padding: 16px;
  padding-left: 50px;
  font-weight: bold;
  min-width: 400px;

  &::placeholder {
    color: ${Colors.textSecondary};
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 13px;
  left: 16px;
  & > svg {
    fill: ${Colors.textSecondary};
  }
`;

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useAppDispatch();

  const debouncedSearchQueryUpdate = useDebouncedCallback(() => {
    dispatch(updateSearchQuery(searchQuery));
  }, 500);

  useEffect(() => {
    debouncedSearchQueryUpdate();
  }, [searchQuery, debouncedSearchQueryUpdate]);

  return (
    <Container>
      <IconContainer>
        <SearchIcon />
      </IconContainer>
      <SearchInput
        placeholder="Search item"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </Container>
  );
};

export default SearchBar;
