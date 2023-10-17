import { Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/project";
import AlarmPage from "./pages/alarm";
import AnalysisPage from "./pages/analysis";
import CalenderPage from "./pages/calender";
import GuidePage from "./pages/guide";
import TaskPage from "./pages/task";
import TeamPage from "./pages/team";

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<ProjectPage></ProjectPage>} />
      <Route path='/alarm' element={<AlarmPage></AlarmPage>} />
      <Route path='/analysis' element={<AnalysisPage></AnalysisPage>} />
      <Route path='/calender' element={<CalenderPage></CalenderPage>} />
      <Route path='/guide' element={<GuidePage></GuidePage>} />
      <Route path='/task' element={<TaskPage></TaskPage>} />
      <Route path='/team' element={<TeamPage></TeamPage>} />
    </Routes>
  );
};
