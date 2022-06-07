import styled from "styled-components";
import { useState } from "react";
import justificado from "../../assets/img/justificado.png";
import centralizado from "../../assets/img/centralizado.png";

export default function TextAlign() {
  const [tapJustificado, setTapJustificado] = useState(false);
  const [tapCentralizado, setTapCentralizado] = useState(false);

  function selectJustificado() {
    if (tapJustificado) {
      setTapJustificado(false);
      return;
    }
    setTapJustificado(true);
    setTapCentralizado(false);
  }

  function selectCentralizado() {
    if (tapCentralizado) {
      setTapCentralizado(false);
      return;
    }
    setTapCentralizado(true);
    setTapJustificado(false);
  }

  return (
    <TextAligned
      colorJ={tapJustificado ? "#ddd" : "#fff"}
      colorC={tapCentralizado ? "#ddd" : "#fff"}
    >
      <img
        onClick={selectJustificado}
        name="justificado"
        src={justificado}
        alt=""
      />
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
  }

  img:first-child {
    background-color: ${(props) => props.colorJ};
  }
  img:last-child {
    background-color: ${(props) => props.colorC};
  }
`;
