import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import "./App.css";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}
