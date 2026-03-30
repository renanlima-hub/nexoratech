const pacientes = [
  "Sofia Baccos - 09:00",
  "Fabiana de Lima - 09:30",
  "Virginia Fonseca - 13:00",
  "Harry Styles - 14:00"
];

export default function Agendados() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <section className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-2">
          Pacientes agendados
        </h1>
        <p className="text-slate-500 mb-8">
          Lista ilustrativa dos atendimentos confirmados.
        </p>

        <div className="space-y-4">
          {pacientes.map((paciente) => (
            <div
              key={paciente}
              className="border border-blue-200 bg-blue-50 rounded-2xl p-4 text-slate-700"
            >
              {paciente}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}