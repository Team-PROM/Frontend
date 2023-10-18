import { Draggable } from "react-beautiful-dnd";
import { styled } from "styled-components";

export default function kanvanDrag({ item, index }) {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => {
        return (
          <Block
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDrag={snapshot.isDragging}
            style={{
              ...provided.draggableProps.style,
            }}>
            {item.content}
          </Block>
        );
      }}
    </Draggable>
  );
}

const Block = styled.div`
  user-select: none;
  padding: 16px;
  min-height: 50px;
  color: white;
  background-color: ${({ isDrag }) => (isDrag ? "lightGray" : "gray")};
`;
