import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Game from "./pages/Game";
import { useCallback, useContext, useEffect, useState } from "react";
import { Context } from "./index";
import { observer } from "mobx-react-lite";

function App() {
  const { store } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  const authorize = useCallback(async () => {
    await store.checkAuth()
      .finally(() => setIsLoading(false));
  }, [store]);

  useEffect(() => {
    authorize();
  }, [authorize]);

  if (isLoading) {
    return (
      <Loading />
    );
  }

  if (!store.isAuthorized()) {
    return (
      <div className="layout">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
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
          <Route path="game" element={<Game />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  )
};

export default observer(App);
