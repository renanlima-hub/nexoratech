import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Faq from "./pages/Faq";
import Contato from "./pages/Contato";
import Integrantes from "./pages/Integrantes";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Solucao from "./pages/Solucao";
import Funcionalidades from "./pages/Funcionalidades";
import PacienteDetalhes from "./pages/PacienteDetalhes";

function AppContent() {
  const location = useLocation();

  const isDashboardPage = location.pathname
    .toLowerCase()
    .startsWith("/dashboard");

  if (isDashboardPage) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard/paciente/:cpf"
            element={
              <PrivateRoute>
                <PacienteDetalhes />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />

      <main className="flex-1 pt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/solucao" element={<Solucao />} />
          <Route
            path="/funcionalidades"
            element={<Funcionalidades />}
          />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}

export default App;