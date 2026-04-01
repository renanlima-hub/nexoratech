import hero from "../assets/Logo Nexora.jpg";
import { Link } from "react-router-dom";

const indicadores = [
  { titulo: "Pacientes acompanhados", valor: 320, largura: "80%" },
  { titulo: "Dentistas conectados", valor: 40, largura: "55%" },
  { titulo: "Redução de retrabalho", valor: 85, largura: "85%" },
  { titulo: "Registros organizados", valor: 2500, largura: "95%" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white border border-slate-200 rounded-3xl shadow-md px-8 py-14 text-center">
          <img
            src={hero}
            alt="Logo NexoraTech"
            className="w-32 md:w-40 mx-auto mb-6"
          />

          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight mb-5">
            Tecnologia inteligente para gestão odontológica
          </h1>

          <h2 className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Sistema e chatbot que organizam informações, reduzem retrabalho e
            aproximam equipe, dentistas e pacientes de forma simples e eficiente.
          </h2>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/sobre"
              className="bg-blue-900 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-xl transition"
            >
              Conheça o projeto
            </Link>

            <Link
              to="/faq"
              className="border border-blue-900 text-blue-900 hover:bg-blue-50 font-semibold px-6 py-3 rounded-xl transition"
            >
              Perguntas frequentes
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-8">
        <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
            Indicadores do protótipo
          </h2>

          <div className="space-y-5">
            {indicadores.map((item) => (
              <div key={item.titulo}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-700 font-medium">{item.titulo}</span>
                  <span className="text-blue-900 font-bold">
                    {item.valor}
                    {item.titulo === "Redução de retrabalho" ? "%" : "+"}
                  </span>
                </div>

                <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-900 rounded-full"
                    style={{ width: item.largura }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-500 mt-6">
            Indicadores ilustrativos criados para simular métricas de uso da plataforma.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-8">
        <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            O problema
          </h2>
          <p className="text-slate-700 leading-8 text-lg">
            A comunicação entre equipe, dentistas voluntários e pacientes
            acontece por canais fragmentados, como e-mails, planilhas e
            mensagens. Isso gera atrasos, informações desencontradas e
            sobrecarga operacional.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
          Nossa solução
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Centralização
            </h3>
            <p className="text-slate-600 leading-7">
              Dados unificados de pacientes e atendimentos em um só lugar.
            </p>
          </article>

          <article className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Fluxos claros
            </h3>
            <p className="text-slate-600 leading-7">
              Acompanhamento de triagem, encaminhamento e tratamento com mais clareza.
            </p>
          </article>

          <article className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Atendimento assistido
            </h3>
            <p className="text-slate-600 leading-7">
              Respostas rápidas e padronizadas para apoiar a operação.
            </p>
          </article>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
          Para quem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Equipe</h3>
            <p className="leading-7 text-slate-600">
              Visão unificada dos processos e padronização da operação.
            </p>
          </article>

          <article className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">
              Dentistas voluntários
            </h3>
            <p className="leading-7 text-slate-600">
              Acesso facilitado às informações e apoio no registro de atendimentos.
            </p>
          </article>

          <article className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Pacientes</h3>
            <p className="leading-7 text-slate-600">
              Acompanhamento mais ágil, comunicação clara e melhor experiência.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}