export default function Sobre() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-slate-800 px-6 py-16">
      <section className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-xl p-10 mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 text-center">
          Sobre o projeto
        </h1>

        <p className="text-lg text-slate-600 leading-8 mb-6">
          O NexoraTech é uma solução desenvolvida para melhorar a organização
          e a comunicação entre equipes, dentistas voluntários e pacientes.
        </p>

        <p className="text-lg text-slate-600 leading-8 mb-6">
          Nosso objetivo é centralizar informações importantes, reduzir
          retrabalho e tornar o processo de atendimento mais eficiente e
          acessível para todos os envolvidos.
        </p>

        <p className="text-lg text-slate-600 leading-8">
          Utilizando tecnologias modernas como React e Tailwind, buscamos
          criar uma experiência simples, intuitiva e responsiva.
        </p>
      </section>

      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-white rounded-2xl shadow-md p-7 border border-slate-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Missão</h2>
          <p className="text-slate-600 leading-7">
            Facilitar a comunicação e organização de atendimentos, trazendo
            eficiência e qualidade para os processos.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-7 border border-slate-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Visão</h2>
          <p className="text-slate-600 leading-7">
            Ser uma referência em soluções tecnológicas para gestão de
            atendimentos sociais.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
            Objetivos do projeto
          </h2>

          <div className="w-20 h-1 bg-cyan-400 rounded-full mx-auto mb-5"></div>

          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Nosso objetivo é utilizar a tecnologia para transformar a forma como
            os atendimentos são organizados e acompanhados.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <li className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 hover:shadow-lg transition">
            Melhorar a comunicação entre equipe e dentistas voluntários.
          </li>

          <li className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 hover:shadow-lg transition">
            Reduzir retrabalho e desencontro de informações.
          </li>

          <li className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 hover:shadow-lg transition">
            Facilitar o acompanhamento dos atendimentos.
          </li>

          <li className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 hover:shadow-lg transition">
            Tornar o processo mais organizado e eficiente.
          </li>
        </ul>
      </section>
    </main>
  );
}