import { Route, Routes, Link } from "react-router-dom";

import "./App.scss";
import Todo from "./layouts/components/demo/Todo";
import Header from "./layouts/components/Header/Header";
import Login from "./layouts/components/Login/Login";
import { publicRoutes } from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
