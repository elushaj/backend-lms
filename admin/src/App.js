import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./admin/pages/list/BookList";
import IssueList from "./admin/pages/list/IssueList";
import List from "./admin/pages/list/List";

import { bookInputs, userInputs,returnInputs,issueInputs } from "./formSource";
import Home from "./admin/pages/home/Home";
import Login from "./admin/pages/login/Login";
import Single from "./admin/pages/single/Single";
import BookSingle from "./admin/pages/single/BookSingle";
import EditBook from "./admin/pages/edit/EditBook";
import New from "./admin/pages/newUser/NewUser";
import NewIssue from "./admin/pages/newIssue/NewIssue";
import Table from "./admin/components/table/Table";
import "./style/dark.scss";
import { DarkModeContext } from "./admin/context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "./admin/context/AuthContext";
import { Navigate } from "react-router-dom";
import { userColumns,issueColumns,bookColumns } from "./datatablesource";
import NewBook from "./admin/pages/newBook/NewBook";
import NewUser from "./admin/pages/newUser/NewUser"
const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            {" "}
            <Route path="login" element={<Login />} />
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />{" "}
                </ProtectedRoute>
              }
            />
            <Route path="members">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <List columns={userColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":userId"
                element={
                  
                    <Single />
                  
                }
              />
              <Route
                path="new"
                element={<NewUser inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="books">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <BookList columns={bookColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":bookId"
                element={
                  <ProtectedRoute>
                    <BookSingle />
                  </ProtectedRoute>
                }
              />
                <Route
                path=":bookId/edit"
                element={
                  <ProtectedRoute>
                    <EditBook />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={<NewBook inputs={bookInputs} title="Add New Book" />}
              />
            </Route>

            <Route path="issues">
              <Route
                index
                element={
                  <ProtectedRoute>
                    <IssueList columns={issueColumns} />
                  </ProtectedRoute>
                }
              />
              <Route
                path=":issueId"
                element={
                  <ProtectedRoute>
                    <Single />
                  </ProtectedRoute>
                }
              />
              <Route
                path="new"
                element={<NewIssue  title="Issue a book" />}
              />
            </Route>
          <Route path="table" element={<Table/>}/> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
