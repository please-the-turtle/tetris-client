import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "components/Header";
import Loading from "components/Loading";
import Home from "pages/Home";
import PageNotFound from "pages/PageNotFound";
import Login from "pages/Login";
import Register from "pages/Register";
import Singleplayer from "pages/Singleplayer";
import { useCallback, useEffect, useState } from "react";
import { useStore } from "store/useStore";
import Leaderboard from "pages/Leaderboard";

function App() {
  const isAuthorized = useStore((state) => state.isAuthorized);
  const checkAuth = useStore((state) => state.checkAuth);
  const [isLoading, setIsLoading] = useState(true);

  const authorize = useCallback(async () => {
    await checkAuth()
      .finally(() => setIsLoading(false));
  }, [checkAuth]);

  useEffect(() => {
    authorize();
  }, [authorize]);

  if (isLoading) {
    return (
      <Loading />
    );
  }

  if (!isAuthorized) {
    return (
      <div className="layout">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="singleplayer" element={<Singleplayer />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    )
  }

  return (
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
  )
};

export default App;