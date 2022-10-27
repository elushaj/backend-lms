import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./admin/pages/list/List";
import { productInputs, userInputs } from "./formSource";
import Home from "./admin/pages/home/Home";
import Login from "./admin/pages/login/Login";
import Single from "./admin/pages/single/Single";
import New from "./admin/pages/new/New";
import "./style/dark.scss";
import { DarkModeContext } from "./admin/context/darkModeContext";
import { useContext } from "react";
const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="books">
              <Route index element={<List />} />
              <Route path=":bookId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
