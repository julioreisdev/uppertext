import styled from "styled-components";

export default function TextFormat() {
  return (
    <TextFormated>
      <select>
        <option>Ab Cd</option>
        <option>ab cd</option>
        <option>AB CD</option>
      </select>
    </TextFormated>
  );
}

const TextFormated = styled.div``;
