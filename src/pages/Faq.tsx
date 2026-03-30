export default function Faq() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-slate-800 px-6 py-16">
      <section className="max-w-4xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-8 text-center">
            Perguntas frequentes
          </h1>

          <div className="space-y-4">
            <details className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <summary className="cursor-pointer text-lg font-bold text-blue-900">
                O que é o NexoraTech?
              </summary>
              <p className="mt-3 text-slate-600 leading-7">
                É uma solução acadêmica que integra chatbot e sistema interno
                para organizar a comunicação e os dados da ONG Turma do Bem.
              </p>
            </details>

            <details className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <summary className="cursor-pointer text-lg font-bold text-blue-900">
                O chatbot substitui o atendimento humano?
              </summary>
              <p className="mt-3 text-slate-600 leading-7">
                Não. Ele apoia a operação com respostas e roteiros padronizados;
                casos mais complexos continuam com a equipe.
              </p>
            </details>

            <details className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <summary className="cursor-pointer text-lg font-bold text-blue-900">
                Quem pode acessar o sistema?
              </summary>
              <p className="mt-3 text-slate-600 leading-7">
                Equipe autorizada e dentistas voluntários cadastrados. O acesso
                é controlado.
              </p>
            </details>

            <details className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <summary className="cursor-pointer text-lg font-bold text-blue-900">
                Posso usar pelo celular?
              </summary>
              <p className="mt-3 text-slate-600 leading-7">
                Sim. Há integração via Telegram e interface web responsiva.
              </p>
            </details>

            <details className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <summary className="cursor-pointer text-lg font-bold text-blue-900">
                Dentistas conseguem registrar atendimentos?
              </summary>
              <p className="mt-3 text-slate-600 leading-7">
                Sim. Na fase 2, o sistema prevê registros, anexos essenciais e
                atualização de status.
              </p>
            </details>

            <details className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
              <summary className="cursor-pointer text-lg font-bold text-blue-900">
                Pacientes terão login?
              </summary>
              <p className="mt-3 text-slate-600 leading-7">
                Está no roadmap da fase 3, com um portal simplificado para
                acompanhar orientações e status.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}