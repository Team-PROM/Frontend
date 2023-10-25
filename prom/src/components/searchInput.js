import { Icon } from "@iconify/react";
import { styled } from "styled-components";
import { theme } from "../styles/theme";

export default function SearchInput() {
  return (
    <Wrapper>
      <IconBox for='input'>
        <Icon icon='iconamoon:search' width='20' color={theme.color.sub2} />
      </IconBox>
      <Input placeholder='작업 검색하기' id='input' />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const IconBox = styled.label`
  width: 46px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 0px 0px 10px;
  background-color: ${({ theme }) => theme.color.gray1};
`;

const Input = styled.input`
  width: 304px;
  height: 36px;
  padding: 0px;
  border: none;
  outline: none;
  border-radius: 0px 10px 10px 0px;
  background-color: ${({ theme }) => theme.color.gray1};
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.size.miniMedium};
  font-weight: ${({ theme }) => theme.weight.miniMedium};
  &::placeholder {
    color: ${({ theme }) => theme.color.sub2};
    font-size: ${({ theme }) => theme.size.miniMedium};
    font-weight: ${({ theme }) => theme.weight.miniMedium};
  }
`;
