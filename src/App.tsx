import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 pt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;