import styled from "styled-components";
import logo from "../../assets/img/favicon.ico";

export default function Header() {
  return (
    <Container>
      <h1>upperText</h1>
      <img src={logo} alt="Logo" />
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 1.5rem;
    margin-right: 0.5rem;
    font-weight: bold;
    color: #666;
  }
  img {
    width: 2rem;
  }
`;
