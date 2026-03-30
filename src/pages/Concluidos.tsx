const atendimentos = [
  "Beatriz Cerqueira - concluído",
  "Binho Mendes - concluído",
];

export default function Concluidos() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <section className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-2">
          Atendimentos concluídos
        </h1>
        <p className="text-slate-500 mb-8">
          Histórico ilustrativo de atendimentos já finalizados.
        </p>

        <div className="space-y-4">
          {atendimentos.map((item) => (
            <div
              key={item}
              className="border border-emerald-200 bg-emerald-50 rounded-2xl p-4 text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}