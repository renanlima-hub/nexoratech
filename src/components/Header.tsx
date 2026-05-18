import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const navClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-white font-semibold border-b-2 border-cyan-300 pb-1"
      : "text-blue-100 hover:text-white transition pb-1";

  return (
    <header className="sticky top-0 z-50 bg-blue-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-[72px] flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold tracking-tight">
          Nexora<span className="text-cyan-300">Tech</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavLink to="/" end className={navClass}>
            Início
          </NavLink>

          <NavLink to="/sobre" className={navClass}>
            Sobre
          </NavLink>

          <NavLink to="/faq" className={navClass}>
            FAQ
          </NavLink>

          <NavLink to="/contato" className={navClass}>
            Contato
          </NavLink>

          <NavLink to="/integrantes" className={navClass}>
            Integrantes
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="bg-slate-900 hover:bg-slate-700 text-white font-semibold px-4 py-2 rounded-lg transition"
          >
            Login
          </Link>

          <Link
            to="/contato"
            className="bg-white text-blue-900 font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition"
          >
            Fale conosco
          </Link>
        </div>
      </div>
    </header>
  );
}