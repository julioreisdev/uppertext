import styled from "styled-components";
import { useState, useContext } from "react";
import centralizado from "../../assets/img/centralizado.png";
import Context from "../Context/Context";

export default function TextAlign() {
  const [tapCentralizado, setTapCentralizado] = useState(false);

  const { setAlinhamentoTexto } = useContext(Context);

  function selectCentralizado() {
    if (tapCentralizado) {
      setTapCentralizado(false);
      setAlinhamentoTexto("normal");
      return;
    }
    setTapCentralizado(true);
    setAlinhamentoTexto("center");
  }

  return (
    <TextAligned colorC={tapCentralizado ? "#ddd" : "#fff"}>
      <img
        onClick={selectCentralizado}
        name="centralizado"
        src={centralizado}
        alt=""
      />
    </TextAligned>
  );
}

const TextAligned = styled.div`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 25px;
    padding: 0.1rem;
    background-color: ${(props) => props.colorC};
  }
`;
