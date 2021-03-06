import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./styles/reset.scss";
import "./styles/common.scss";

import Login from "./pages/Login/Login.js";
import List from "./pages/List/List.js";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<List />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
