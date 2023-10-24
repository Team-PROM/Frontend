import React from "react";
import { styled } from "styled-components";
import KanbanBoard from "../components/kanbanBoard";
import Body from "../components/common/pageBody";
import SelectMenu from "../components/selectMenu";
import ToggleButton from "../components/toggleButton";

export default function ProjectPage() {
  return (
    <Body>
      <TopContainer>
        <SelectMenu keyword='team' />
        <SelectMenu keyword='domain' />
        <SelectMenu keyword='tag' />
        <ToggleButton />
      </TopContainer>
      <KanbanBoard></KanbanBoard>
    </Body>
  );
}

const TopContainer = styled.div`
  margin-left: 30px;
  gap: 8px;
  display: flex;
  align-items: center;
  height: 30px;
  margin-bottom: 40px;
  > :last-child {
    margin-left: 12px;
  }
`;
