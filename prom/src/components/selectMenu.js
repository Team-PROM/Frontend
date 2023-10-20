import { styled } from "styled-components";

export default function SelectMenu() {
  return (
    <Container>
      <Item>a</Item>
      <Item>b</Item>
      <Item>c</Item>
    </Container>
  );
}

const Container = styled.select`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 1px;
  font-size: 12px;
  outline: none;
`;

const Item = styled.option``;
