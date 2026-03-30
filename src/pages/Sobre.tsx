export default function Sobre() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-slate-800 px-6 py-16">
      
      <section className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl shadow-xl p-10">
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

      <section className="max-w-4xl mx-auto mt-10 grid md:grid-cols-2 gap-6">
        
        <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-200">
          <h2 className="text-xl font-bold text-blue-900 mb-3">Missão</h2>
          <p className="text-slate-600 leading-7">
            Facilitar a comunicação e organização de atendimentos, trazendo
            eficiência e qualidade para os processos.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-200">
          <h2 className="text-xl font-bold text-blue-900 mb-3">Visão</h2>
          <p className="text-slate-600 leading-7">
            Ser uma referência em soluções tecnológicas para gestão de
            atendimentos sociais.
          </p>
        </div>

      </section>
    </main>
  );
}