import { Droppable } from "react-beautiful-dnd";
import Item from "./kanbanDrag";
import { styled } from "styled-components";

export default function kanbanDrop({ columnId, column }) {
  return (
    <Wrapper key={columnId}>
      <Droppable droppableId={columnId} key={columnId}>
        {(provided, snapshot) => {
          return (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {column.items.map((item, index) => {
                return <Item item={item} index={index} />;
              })}
              {provided.placeholder}
            </Container>
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
  min-width: 280px;
  height: 600px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 280px;
  height: 600px;
  overflow-y: auto;
`;
