import React from "react";
import styled from "@emotion/styled";
import NavBar from "./components/NavBar";

const Container = styled.section`
  min-height: 100vh;
`;

function App() {
  return (
    <Container>
      <NavBar />
    </Container>
  );
}

export default App;
