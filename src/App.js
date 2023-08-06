import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import DebateList from "./pages/debate_list/DebateList";
import SectionTwo from "./pages/home/sections/SectionTwo"; // SectionTwo 컴포넌트 임포트

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lists" element={<DebateList />} />
        <Route path="/section2" element={<SectionTwo />} /> {/* 추가 */}
      </Routes>
    </Router>
  );
};

export default App;
