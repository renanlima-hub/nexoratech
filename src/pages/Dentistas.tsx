const dentistas = [
  "Dr. Guilherme Dabul",
  "Dra. Giovanna Vilhena",
  "Dr. Felipe Nunes",
];

export default function Dentistas() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <section className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-2">
          Dentistas ativos
        </h1>
        <p className="text-slate-500 mb-8">
          Profissionais atualmente vinculados ao protótipo.
        </p>

        <div className="space-y-4">
          {dentistas.map((item) => (
            <div
              key={item}
              className="border border-violet-200 bg-violet-50 rounded-2xl p-4 text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}