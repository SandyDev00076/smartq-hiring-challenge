import React from "react";
import styled from "@emotion/styled";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";

const Container = styled.section`
  min-height: 100vh;
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
