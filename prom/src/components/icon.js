import { Icon } from "@iconify/react";
import { ReactComponent as Alarm } from "../asset/gradientIcon/alarm.svg";
import { ReactComponent as Calender } from "../asset/gradientIcon/calender.svg";
import { ReactComponent as Line } from "../asset/gradientIcon/line.svg";
import { ReactComponent as List } from "../asset/gradientIcon/list.svg";
import { ReactComponent as Project } from "../asset/gradientIcon/project.svg";
import { ReactComponent as Question } from "../asset/gradientIcon/question.svg";
import { ReactComponent as Team } from "../asset/gradientIcon/team.svg";
import { styled } from "styled-components";

export default function _Icon({ icon, path }) {
  if (path == icon) {
    switch (icon) {
      case "alarm":
        return (
          <Select>
            <Alarm
              style={{
                marginLeft: "30px",
                marginRight: "15px",
                fontSize: "20px",
              }}
            />
            알림
          </Select>
        );
      case "calendar":
        return (
          <Select>
            <Calender
              style={{
                marginLeft: "30px",
                marginRight: "15px",
                fontSize: "20px",
              }}
            />
            캘린더
          </Select>
        );
      case "analysis":
        return (
          <Select>
            <Line
              style={{
                marginLeft: "30px",
                marginRight: "15px",
                fontSize: "20px",
              }}
            />
            분석
          </Select>
        );
      case "task":
        return (
          <Select>
            <List
              style={{
                marginLeft: "30px",
                marginRight: "15px",
                fontSize: "20px",
              }}
            />
            작업
          </Select>
        );
      case "/":
        return (
          <Select>
            <Project
              style={{
                marginLeft: "30px",
                marginRight: "15px",
                fontSize: "20px",
              }}
            />
            프로젝트
          </Select>
        );
      case "guide":
        return (
          <Select>
            <Question
              style={{
                marginLeft: "30px",
                marginRight: "15px",
                fontSize: "20px",
              }}
            />
            이용 가이드
          </Select>
        );
      case "team":
        return (
          <Select>
            <Team
              style={{
                marginLeft: "30px",
                marginRight: "15px",
                fontSize: "20px",
              }}
            />
            팀원
          </Select>
        );
    }
  } else {
    switch (icon) {
      case "alarm":
        return (
          <NoSelect>
            <Icon
              icon='clarity:bell-line'
              style={{
                marginLeft: "30px",
                marginRight: "15px",
                fontSize: "20px",
              }}
            />{" "}
            알림
          </NoSelect>
        );
      case "calendar":
        return (
          <NoSelect>
            <Icon
              icon='system-uicons:calendar'
              style={{
                marginLeft: "30px",
                marginRight: "15px",
                fontSize: "20px",
              }}
            />
            캘린더
          </NoSelect>
        );
      case "analysis":
        return (
          <NoSelect>
            <Icon
              icon='ic:baseline-insights'
              style={{
                marginLeft: "30px",
                marginRight: "15px",
                fontSize: "20px",
              }}
            />
            분석
          </NoSelect>
        );
      case "task":
        return (
          <NoSelect>
            <Icon
              icon='fluent:task-list-20-filled'
              style={{
                marginLeft: "30px",
                marginRight: "15px",
                fontSize: "20px",
              }}
            />
            작업
          </NoSelect>
        );
      case "/":
        return (
          <NoSelect>
            <Icon
              icon='ion:rocket-outline'
              style={{
                marginLeft: "30px",
                marginRight: "15px",
                fontSize: "20px",
              }}
            />
            프로젝트
          </NoSelect>
        );
      case "guide":
        return (
          <NoSelect>
            <Icon
              icon='solar:question-circle-linear'
              style={{
                marginLeft: "30px",
                marginRight: "15px",
                fontSize: "20px",
              }}
            />
            이용 가이드
          </NoSelect>
        );
      case "team":
        return (
          <NoSelect>
            <Icon
              icon='ion:people-outline'
              style={{
                marginLeft: "30px",
                marginRight: "15px",
                fontSize: "20px",
              }}
            />
            팀원
          </NoSelect>
        );
    }
  }
}

const Select = styled.div`
  font-size: 14px;
  font-weight: 900;
  background: var(
    --purple-gradation,
    linear-gradient(180deg, #ee9ae5 0%, #5961f9 100%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
`;

const NoSelect = styled.div`
  font-size: 14px;
  color: white;
  display: flex;
  align-items: center;
`;
