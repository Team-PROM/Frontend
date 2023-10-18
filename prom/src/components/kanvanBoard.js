import React, { useState } from "react";
import { styled } from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./kanvanDrop";
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
    title: "할 일",
    items: tasks,
  },
  1: {
    title: "진행 중",
    items: [],
  },
  2: {
    title: "완료",
    items: [],
  },
};

function KanvanBoard() {
  const [columns, setColumns] = useState(taskStatus);
  return (
    <Wrapper>
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
        {Object.entries(columns).map(([columnId, column], index) => {
          return <Column columnId={columnId} column={column} />;
        })}
      </DragDropContext>
    </Wrapper>
  );
}

export default KanvanBoard;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  gap: 30px;
`;
