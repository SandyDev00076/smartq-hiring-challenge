import React from "react";
import styled from "@emotion/styled";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import { Colors } from "./Colors";

const Container = styled.section`
  min-height: 100vh;
  background-color: ${Colors.background};
`;

function App() {
  return (
    <Container>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Menu />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
