import { Droppable } from "react-beautiful-dnd";
import Item from "./kanbanDrag";
import { styled } from "styled-components";

export default function kanbanDrop({ columnId, column }) {
  return (
    <Droppable droppableId={columnId} key={columnId}>
      {(provided, snapshot) => {
        return (
          <Container {...provided.droppableProps} ref={provided.innerRef}>
            {column.items.map((item, index) => {
              return <Item item={item} index={index} key={index} />;
            })}
            {provided.placeholder}
          </Container>
        );
      }}
    </Droppable>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 280px;
  height: 550px;
  padding-bottom: 50px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0px;
  }
  > :last-child {
    margin-bottom: 50px;
  }
`;
