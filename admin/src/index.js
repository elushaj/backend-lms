import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { DarkModeContextProvider } from "./admin/context/darkModeContext";
import { AuthContextProvider } from "./admin/context/AuthContext";

ReactDOM.render(<React.StrictMode><AuthContextProvider><DarkModeContextProvider><App /></DarkModeContextProvider></AuthContextProvider></React.StrictMode>, document.getElementById("root"));
