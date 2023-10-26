import React from "react";
import { styled } from "styled-components";
import KanbanBoard from "../components/kanbanBoard";
import Body from "../components/common/pageBody";
import SelectMenu from "../components/selectMenu";
import ToggleButton from "../components/toggleButton";
import SearchInput from "../components/searchInput";
import { Icon } from "@iconify/react";

export default function ProjectPage() {
  return (
    <Body>
      <TopContainer>
        <TopLeftContainer>
          <SearchInput />
          <SelectContainer>
            <SelectMenu keyword='team' />
            <SelectMenu keyword='domain' />
            <SelectMenu keyword='tag' />
            <ToggleButton />
          </SelectContainer>
        </TopLeftContainer>
        <TopRightContainer>
          <TaskProgress>
            <ProgressText>
              <div>
                작업 진행률
                <span>(43%)</span>
              </div>
              <div>
                <Icon icon='ci:info' width='18' />
              </div>
            </ProgressText>
            <ProgressBar></ProgressBar>
          </TaskProgress>
        </TopRightContainer>
      </TopContainer>
      <KanbanBoard />
    </Body>
  );
}

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 40px;
  margin-top: 40px;
`;

const TopLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TopRightContainer = styled.div``;

const TaskProgress = styled.div`
  width: 232px;
  height: 48px;
  padding: 16px 24px 16px 24px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color.gray1};
  border: 1px solid ${({ theme }) => theme.color.text2};
`;

const ProgressText = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.size.miniMedium};
    font-size: ${({ theme }) => theme.weight.miniMedium};
    color: ${({ theme }) => theme.color.white};
    span {
      margin-left: 2px;
      font-size: ${({ theme }) => theme.size.microMedium};
      font-size: ${({ theme }) => theme.weight.microMedium};
      color: ${({ theme }) => theme.color.text3};
    }
  }
  > :last-child {
    width: 18px;
    height: 18px;
  }
`;

const ProgressBar = styled.div``;

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
