import { styled } from "styled-components";

export default function ModalBody({ children }) {
  return <Body>{children}</Body>;
}

const Body = styled.div`
  width: 750px;
  height: 270px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.menuback};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
`;
