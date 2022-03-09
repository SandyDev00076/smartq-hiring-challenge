import React from "react";
import styled from "@emotion/styled";
import { Colors } from "../Colors";
import SearchBar from "./SearchBar";

const Container = styled.nav`
  padding: 24px 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
`;

const AppLogo = styled.div`
  border-radius: 20px;
  padding: 10px 16px;
  background-color: ${Colors.brand};
  text-transform: uppercase;
  & > span {
    color: ${Colors.white};
  }
`;

const NavBar = () => {
  return (
    <Container>
      <AppLogo>
        Smart<span>Q</span>
      </AppLogo>
      <SearchBar />
    </Container>
  );
};

export default NavBar;
