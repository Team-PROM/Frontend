import React, { useState } from "react";
import { styled } from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./kanbanDrop";
import { onDragEnd } from "../func/onDragEnd";

const tasks = [
  {
    id: "1",
    title: "첫번째 아이템",
    content: "nangnjkagnji\ndavanda\nvn\nakf",
    progress: 39,
  },
  { id: "2", title: "두번째 아이템", content: "Second task", progress: 100 },
  { id: "3", title: "세번째 아이템", content: "Third task", progress: 42 },
  { id: "4", title: "네번째 아이템", content: "Fourth task", progress: 80 },
  { id: "5", title: "다섯번째 아이템", content: "Fifth task", progress: 2 },
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
          <TitleImg src='imgs/todo.svg' />할 일({columns[0].items.length})
        </Title>
        <Title>
          <TitleImg src='imgs/progress.svg' />
          진행 중({columns[1].items.length})
        </Title>
        <Title>
          <TitleImg src='imgs/complete.svg' />
          완료({columns[2].items.length})
        </Title>
      </TitleContainer>
      <Wrapper>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
          {Object.entries(columns).map(([columnId, column]) => {
            return (
              <Column columnId={columnId} column={column} key={columnId} />
            );
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
  gap: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 26px;
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
