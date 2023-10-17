import { Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/project";
import AlarmPage from "./pages/alarm";

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<ProjectPage></ProjectPage>} />
      <Route path='/alarm' element={<AlarmPage></AlarmPage>} />
    </Routes>
  );
};
