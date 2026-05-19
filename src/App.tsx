import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
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

  const isAdminPage = location.pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen flex flex-col">
      {!isAdminPage && <Header />}

      <main className="flex-1">
        {!isAdminPage && <div className="pt-6" />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/paciente/:cpf" element={<PacienteDetalhes />} />
          <Route path="/solucao" element={<Solucao />} />
          <Route path="/funcionalidades" element={<Funcionalidades />} />
        </Routes>
      </main>

      {!isAdminPage && <Footer />}
      {!isAdminPage && <BackToTop />}
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