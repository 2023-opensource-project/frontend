import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import MainPage from "./Pages/MainPage";
import MasterResume from "./Pages/MasterResume";
import MasterCoverLetter from "./Pages/MasterCoverLetter";
import CoverLetter from "./Pages/CoverLetter";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/masterResume" element={<MasterResume />} />
        <Route path="/masterCoverLetter" element={<MasterCoverLetter />} />
        <Route path="/coverLetter" element={<CoverLetter />} />
        <Route path="/login" element={<Login users={users} />} />
        <Route path="/signup" element={<Signup users={users} setUsers={setUsers} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
