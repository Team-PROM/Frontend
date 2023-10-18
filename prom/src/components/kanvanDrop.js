import { Droppable } from "react-beautiful-dnd";
import Item from "./kanvanDrag";
import { styled } from "styled-components";
import { ReactComponent as TodoImg } from "../asset/projectPageImg/todo.svg";
import { ReactComponent as CompleteImg } from "../asset/projectPageImg/complete.svg";
import { ReactComponent as ProgressImg } from "../asset/projectPageImg/progress.svg";

export default function kanvanDrop({ columnId, column }) {
  const Img = () => {
    if (column.title == "할 일") {
      if (column.title == "진행 중") {
        console.log(123);
        if (column.title == "완료") {
          return <CompleteImg />;
        }
        return <ProgressImg />;
      }
      return <TodoImg />;
    }
  };

  return (
    <Wrapper key={columnId}>
      <Title>
        {Img()}
        {column.title}
      </Title>
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
  width: 280px;
  height: 600px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 36px;
  display: flex;
  width: 280px;
  > :first-child {
    margin-right: 10px;
  }
`;

const Container = styled.div`
  width: 280px;
  height: 600px;
`;
