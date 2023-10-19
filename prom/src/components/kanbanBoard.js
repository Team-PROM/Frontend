import React, { useState } from "react";
import { styled } from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./kanbanDrop";
import { onDragEnd } from "../func/onDragEnd";

const tasks = [
  { id: "1", content: "First task" },
  { id: "2", content: "Second task" },
  { id: "3", content: "Third task" },
  { id: "4", content: "Fourth task" },
  { id: "5", content: "Fifth task" },
];

const taskStatus = {
  0: {
    items: tasks,
  },
  1: {
    items: [],
  },
  2: {
    items: [],
  },
};

function KanbanBoard() {
  const [columns, setColumns] = useState(taskStatus);
  return (
    <Container>
      <TitleContainer>
        <Title>
          <TitleImg src='imgs/todo.svg' />할 일
        </Title>
        <Title>
          <TitleImg src='imgs/progress.svg' />
          진행 중
        </Title>
        <Title>
          <TitleImg src='imgs/complete.svg' />
          완료
        </Title>
      </TitleContainer>
      <Wrapper>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
          {Object.entries(columns).map(([columnId, column], index) => {
            return <Column columnId={columnId} column={column} />;
          })}
        </DragDropContext>
      </Wrapper>
    </Container>
  );
}

export default KanbanBoard;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const TitleContainer = styled.div`
  width: 900px;
  display: flex;
  gap: 30px;
  margin-bottom: 36px;
`;

const Title = styled.div`
  width: 280px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

const TitleImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;
