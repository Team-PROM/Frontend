import { Icon } from "@iconify/react";
import { ReactComponent as Alarm } from "../asset/gradientIcon/alarm.svg";
import { ReactComponent as Calender } from "../asset/gradientIcon/calender.svg";
import { ReactComponent as Line } from "../asset/gradientIcon/calender.svg";
import { ReactComponent as List } from "../asset/gradientIcon/calender.svg";
import { ReactComponent as Project } from "../asset/gradientIcon/calender.svg";
import { ReactComponent as Question } from "../asset/gradientIcon/calender.svg";
import { ReactComponent as Team } from "../asset/gradientIcon/calender.svg";

export default function _Icon({ select, icon }) {
  if (select) {
    switch (icon) {
      case "alarm":
        return (
          <Alarm
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              fontSize: "20px",
            }}
          />
        );
      case "calender":
        return (
          <Calender
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              fontSize: "20px",
            }}
          />
        );
      case "line":
        return (
          <Line
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              fontSize: "20px",
            }}
          />
        );
      case "list":
        return (
          <List
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              fontSize: "20px",
            }}
          />
        );
      case "project":
        return (
          <Project
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              fontSize: "20px",
            }}
          />
        );
      case "question":
        return (
          <Question
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              fontSize: "20px",
            }}
          />
        );
      case "team":
        return (
          <Team
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              fontSize: "20px",
            }}
          />
        );
    }
  } else {
    switch (icon) {
      case "alarm":
        return (
          <Icon
            icon='clarity:bell-line'
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              fontSize: "20px",
            }}
          />
        );
      case "calender":
        return (
          <Icon
            icon='system-uicons:calendar'
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              fontSize: "20px",
            }}
          />
        );
      case "line":
        return (
          <Icon
            icon='ic:baseline-insights'
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              fontSize: "20px",
            }}
          />
        );
      case "list":
        return (
          <Icon
            icon='fluent:task-list-20-filled'
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              fontSize: "20px",
            }}
          />
        );
      case "project":
        return (
          <Icon
            icon='ion:rocket-outline'
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              fontSize: "20px",
            }}
          />
        );
      case "question":
        return (
          <Icon
            icon='solar:question-circle-linear'
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              fontSize: "20px",
            }}
          />
        );
      case "team":
        return (
          <Icon
            icon='ion:people-outline'
            style={{
              marginLeft: "30px",
              marginRight: "15px",
              fontSize: "20px",
            }}
          />
        );
    }
  }
}
