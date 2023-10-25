import React from "react";
import { styled } from "styled-components";
import KanbanBoard from "../components/kanbanBoard";
import Body from "../components/common/pageBody";
import SelectMenu from "../components/selectMenu";
import ToggleButton from "../components/toggleButton";
import SearchInput from "../components/searchInput";

export default function ProjectPage() {
  return (
    <Body>
      <TopContainer>
        <SearchInput />
        <SelectContainer>
          <SelectMenu keyword='team' />
          <SelectMenu keyword='domain' />
          <SelectMenu keyword='tag' />
          <ToggleButton />
        </SelectContainer>
      </TopContainer>
      <KanbanBoard />
    </Body>
  );
}

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  gap: 30px;
`;

const SelectContainer = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
  height: 30px;
  margin-bottom: 40px;
  > :last-child {
    margin-left: 12px;
  }
`;
