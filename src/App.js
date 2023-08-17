//App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import DebateList from "./pages/debate_list/DebateList";
import SectionTwo from "./pages/home/sections/SectionTwo"; // SectionTwo 컴포넌트 임포트
import DebateDetail from "./components/DebateDetail";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lists" element={<DebateList />} />
        <Route path="/debate/:id" element={<DebateDetail />} />
        {/* <Route path="/section2" element={<SectionTwo />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
