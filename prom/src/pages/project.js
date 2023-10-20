import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { theme } from "../styles/theme";
import KanbanBoard from "../components/kanbanBoard";
import Body from "../components/pageBody";

export default function ProjectPage() {
  return (
    <Body>
      <KanbanBoard></KanbanBoard>
    </Body>
  );
}
