import styled from "styled-components";
import { useState, useContext } from "react";
import Context from "../Context/Context";

export default function FontStyle() {
  const [tapNegrito, setTapNegrito] = useState(false);
  const [tapSublinhado, setTapSublinhado] = useState(false);

  const { setEstiloFonte, setPesoFonte } = useContext(Context);

  function selectNegrito() {
    if (tapNegrito) {
      setTapNegrito(false);
      setPesoFonte("normal");
      return;
    }
    setTapNegrito(true);
    setPesoFonte("bold");
  }

  function selectSublinhado() {
    if (tapSublinhado) {
      setTapSublinhado(false);
      setEstiloFonte("normal");
      return;
    }
    setTapSublinhado(true);
    setEstiloFonte("italic")
  }

  return (
    <FontStyled
      colorN={tapNegrito ? "#ddd" : "#fff"}
      colorS={tapSublinhado ? "#ddd" : "#fff"}
    >
      <p onClick={selectNegrito} value="negrito"></p>
      <p onClick={selectSublinhado} value="sublinhado"></p>
    </FontStyled>
  );
}

const FontStyled = styled.div`
  display: flex;
  p[value="negrito"] {
    background-color: ${(props) => props.colorN};
    font-weight: bold;
    margin-right: 0.5rem;

    :before {
      content: "N";
    }
  }
  p[value="sublinhado"] {
    background-color: ${(props) => props.colorS};
    font-style: italic;
    font-weight: 300;

    :before {
      content: "S";
    }
  }

  p {
    width: 18px;
    text-align: center;
    padding: 0.1rem;
  }

  p:hover {
    cursor: pointer;
  }
`;
