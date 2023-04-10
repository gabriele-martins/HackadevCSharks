import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cadastro } from "./pages/Cadastro";
import { Login } from "./pages/Login";
import { Saldo } from "./pages/Saldo";
import { Termos } from "./pages/Termos";
import { Transferencia } from "./pages/Transferencia";
import { Extrato } from "./pages/Extrato";
// import { Senha } from "./pages/Senha";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/saldo" element={<Saldo />} />
      <Route path="/termos" element={<Termos />} />
      <Route path="/transferir" element={<Transferencia />} />
      <Route path="/extrato" element={<Extrato />} />
      {/* <Route path="/senha" element={<Senha />} /> */}
    </Routes>
  );
}
