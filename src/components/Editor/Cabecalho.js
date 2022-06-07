import styled from "styled-components";
import { useState } from "react";
import FontSize from "./FontSize";
import FontStyle from "./FontStyle";
import TextFormat from "./TextFormat";
import TextAlign from "./TextAlign";

export default function Cabecalho() {
  const [nomeArquivo, setNomeArquivo] = useState("Nome do arquivo");

  return (
    <Container>
      <Download>
        <input
          id=""
          value={nomeArquivo}
          onChange={(e) => setNomeArquivo(e.target.value)}
        />
        <ion-icon name="download-outline"></ion-icon>
      </Download>
      <Format>
        <FontSize />
        <FontStyle />
        <TextFormat />
        <TextAlign />
      </Format>
      <Print>
        <ion-icon name="print-outline"></ion-icon>
      </Print>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 40px;
  border-top: 1px solid #bbb;
  border-left: 1px solid #bbb;
  border-right: 1px solid #bbb;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img:hover {
    cursor: pointer;
  }

  ion-icon {
    font-size: 1.3rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
const Download = styled.div`
  display: flex;
  align-items: center;
  ion-icon {
    margin-bottom: 0.3rem;
  }
`;
const Print = styled.div``;
const Format = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
