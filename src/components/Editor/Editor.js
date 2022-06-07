import { useState } from "react";
import styled from "styled-components";
import Cabecalho from "./Cabecalho";

export default function Editor() {
  const [texto, setTexto] = useState("Digite seu texto aqui..");

  return (
    <Container>
      <Cabecalho />
      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      ></textarea>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  padding: 0.5rem;
  height: calc(100vh - 6rem);
  margin: 0 auto;

  textarea {
    border-color: #ddd;
    border-top: 1px solid #bbb;
    padding: 0.5rem;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
  }
`;
