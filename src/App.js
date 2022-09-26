import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Main, Login, Join, Board, Mypage } from "./page";

function App() {
  const [loginId, setLoginId] = useState("");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<Join />} login={loginId} />
        <Route path="/login" element={<Login />} />
        <Route path="/board" element={<Board />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </div>
  );
}

export default App;
