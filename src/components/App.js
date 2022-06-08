import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/css/reset.css";
import "../assets/css/style.css";
import Header from "./Header/Header";
import Editor from "./Editor/Editor";
import Context from "./Context/Context";
import { useState } from "react";

export default function App() {
  const [pesoFonte, setPesoFonte] = useState("normal");
  const [alinhamentoTexto, setAlinhamentoTexto] = useState("normal");
  const [estiloFonte, setEstiloFonte] = useState("normal");

  return (
    <BrowserRouter>
      <Context.Provider
        value={{
          pesoFonte,
          setPesoFonte,
          alinhamentoTexto,
          setAlinhamentoTexto,
          estiloFonte,
          setEstiloFonte,
        }}
      >
        <Container>
          <Header />
          <Editor />
          <Routes></Routes>
        </Container>
      </Context.Provider>
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
