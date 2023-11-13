import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import MainPage from "./Pages/MainPage";
import MasterResume from "./Pages/MasterResume";
import MasterCoverLetter from "./Pages/MasterCoverLetter";
import CoverLetter from "./Pages/CoverLetter";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/masterResume" element={<MasterResume />} />
        <Route path="/masterCoverLetter" element={<MasterCoverLetter />} />
        <Route path="/CoverLetter" element={<CoverLetter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
