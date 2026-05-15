import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !senha) {
      alert("Preencha e-mail e senha para continuar.");
      return;
    }

    localStorage.setItem(
      "usuarioLogado",
      JSON.stringify({
        email,
        nome: "Usuário NexoraTech",
      })
    );

    navigate("/painel");
  };

  return (
    <main className="min-h-[70vh] bg-slate-50 flex items-center justify-center px-6 py-12">
      <section className="w-full max-w-md bg-white border border-slate-200 rounded-3xl shadow-md p-8">
        <h1 className="text-3xl font-extrabold text-blue-900 text-center mb-3">
          Acessar painel
        </h1>

        <p className="text-slate-600 text-center mb-8">
          Entre com seu e-mail e senha para acessar as informações do sistema.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              E-mail
            </label>
            <input
              type="email"
              placeholder="seuemail@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-700"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Senha
            </label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-700"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Entrar
          </button>
        </form>

        <Link
          to="/"
          className="block text-center text-blue-900 underline mt-6 font-medium"
        >
          Voltar para o início
        </Link>
      </section>
    </main>
  );
}