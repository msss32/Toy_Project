import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Main, Search, Join, Board, Mypage } from "./page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/search" element={<Search />} />
        <Route path="/board" element={<Board />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </div>
  );
}

export default App;
