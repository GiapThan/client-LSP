import { Route, Routes } from "react-router-dom";

import { publicRoutes } from "./routes";
import "./App.scss";
import Header from "./layouts/components/Header/Header";
import ExamCreate from "./layouts/components/ExamCreate/ExamCreate";
import ExamEdit from "./layouts/components/ExamEdit/ExamEdit";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={publicRoutes.examCreate} element={<ExamCreate />} />
        <Route path={publicRoutes.examEdit} element={<ExamEdit />} />
        <Route path={publicRoutes.home} element={<div>home page demo</div>} />
      </Routes>
    </div>
  );
}

export default App;
