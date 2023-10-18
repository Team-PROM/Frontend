import { Droppable } from "react-beautiful-dnd";
import Item from "./kanvanDrag";
import { styled } from "styled-components";

export default function kanvanDrop({ columnId, column }) {
  return (
    <Wrapper key={columnId}>
      <h2>{column.title}</h2>
      <Droppable droppableId={columnId} key={columnId}>
        {(provided, snapshot) => {
          return (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
                padding: 4,
                width: 250,
                margin: 8,
                minHeight: 500,
              }}>
              {column.items.map((item, index) => {
                return <Item item={item} index={index} />;
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
