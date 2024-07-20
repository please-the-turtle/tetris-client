import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header";
import Home from "../../pages/Home";
import PageNotFound from "../../pages/PageNotFound";
import Singleplayer from "../../pages/Singleplayer";
import Leaderboard from "../../pages/Leaderboard";
import "./App.scss";

export default function App() {
  return (
    <Router>
    <div className="layout">
      <div className="layout__header">
        <Header />
      </div>
      <main className="layout__body">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="singleplayer" element={<Singleplayer />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
      </main>
    </div>
    </Router>
  )
}