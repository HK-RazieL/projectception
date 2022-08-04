import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/styles";
import Nav from "./components/organisms/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

import NavigationContextProvider from "./contexts/NavigationContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <NavigationContextProvider>
        <Nav />
        <App />
      </NavigationContextProvider>
    </Router>
  </React.StrictMode>
);
