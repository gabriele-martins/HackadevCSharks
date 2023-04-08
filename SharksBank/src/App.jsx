import React from "react";
import "./App.css";
import { Home } from "./pages/Home";
import { Termos } from "./pages/Termos/index";
import { Login } from "./pages/Login";
import { Transferencia} from "./pages/Transferencia"

export function App() {
    return (
        <div className="App">
            <Transferencia></Transferencia>
        </div>
    );
}
