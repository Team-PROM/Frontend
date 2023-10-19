import { Draggable } from "react-beautiful-dnd";
import { styled } from "styled-components";
import { theme } from "../styles/theme";

export default function kanbanDrag({ item, index }) {
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
            <BlockTop theme={theme}>
              <span>제목인거죠</span>
              <span>60%</span>
            </BlockTop>
          </Block>
        );
      }}
    </Draggable>
  );
}

const Block = styled.div`
  margin-top: 10px;
  user-select: none;
  width: calc(280px - 26px);
  padding: 6px 8px 6px 16px;
  height: 88px;
  color: white;
  background-color: ${({ isDrag }) => (isDrag ? "lightGray" : "gray")};
  background-color: #252631;
  border: 0.5px solid #505866;
  border-radius: 5px;
`;

const BlockTop = styled.div`
  font-size: 12px;
  font-weight: 300;
  color: ${({ theme }) => theme.text3};
  display: flex;
  justify-content: space-between;

  > :last-child {
    width: 36px;
    height: 22px;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.white};
    background-color: #00b5ff;
    text-align: center;
    line-height: 22px;
  }
`;

const BlockMiddle = styled.div``;

const BlockBottom = styled.div``;
