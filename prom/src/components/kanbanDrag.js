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
            // isDrag={snapshot.isDragging}
            style={{
              ...provided.draggableProps.style,
            }}>
            <BlockTop theme={theme}>
              <span>{item.title}</span>
              <span>{item.progress}%</span>
            </BlockTop>
            <BlockMiddle>
              <div></div>
              <TextBox>
                {item.content.split("\n").map((element, index) => (
                  <div key={index}>{element}</div>
                ))}
              </TextBox>
            </BlockMiddle>
            <BlockBottom>
              <TagBox></TagBox>
              <span>3일 남음</span>
            </BlockBottom>
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
  padding: 8px 12px 8px 12px;
  min-height: 84px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.menuback};
  border: 1px solid ${({ theme }) => theme.color.text2};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: none;
`;

const BlockTop = styled.div`
  font-size: ${({ theme }) => theme.size.microLight};
  font-weight: ${({ theme }) => theme.weight.microLight};
  color: ${({ theme }) => theme.color.sub3};
  display: flex;
  justify-content: space-between;
  align-items: center;

  > :last-child {
    width: 36px;
    height: 22px;
    border-radius: 4px;
    font-size: ${({ theme }) => theme.size.microMedium};
    font-weight: ${({ theme }) => theme.weight.microMedium};
    color: ${({ theme }) => theme.color.white};
    background-color: #00b5ff;
    text-align: center;
    line-height: 22px;
    cursor: default;
  }
`;

const BlockMiddle = styled.div`
  display: flex;
  > :first-child {
    width: 24px;
    height: 24px;
    background-color: blueviolet;
    border-radius: 50%;
    margin-right: 8px;
  }
`;

const BlockBottom = styled.div`
  display: flex;
  justify-content: space-between;
  > :last-child {
    color: #ff6060;
    font-size: ${({ theme }) => theme.size.microMedium};
    font-weight: ${({ theme }) => theme.weight.microMedium};
  }
`;

const TagBox = styled.div`
  display: flex;
  gap: 5px;
  background-color: black;
  width: 10px;
  height: 12px;
`;

const TextBox = styled.div`
  > :first-child {
    margin-top: 5px;
  }
  div {
    font-size: ${({ theme }) => theme.size.microMedium};
    font-weight: ${({ theme }) => theme.weight.microMedium};
    color: ${({ theme }) => theme.color.white};
  }
`;
