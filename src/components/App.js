import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import Header from "./Header/Header";
import Editor from "./Editor/Editor";

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Editor />
        <Routes></Routes>
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  padding: 0.5rem;
  background-color: #fdfdfd;
  opacity: 0.9;
  width: 100%;
  min-height: 100vh;
`;
