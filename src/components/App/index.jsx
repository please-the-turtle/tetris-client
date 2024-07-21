import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header";
import PageNotFound from "../../pages/PageNotFound";
import Singleplayer from "../../pages/Singleplayer";
import Statistics from "../../pages/Statistics";
import Multiplayer from "../../pages/Multiplayer"
import "./App.scss";

export default function App() {
  return (
    <Router>
    <div className="layout">
      <div className="header">
        <Header />
      </div>
      <main>
          <Routes>
            <Route path="/" element={<Multiplayer />} />
            <Route path="singleplayer" element={<Singleplayer />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
      </main>
    </div>
    </Router>
  )
}