import React from "react";
import KanbanBoard from "../components/kanbanBoard";
import Body from "../components/pageBody";
import SelectMenu from "../components/selectMenu";

export default function ProjectPage() {
  return (
    <Body>
      <SelectMenu />
      <KanbanBoard></KanbanBoard>
    </Body>
  );
}
