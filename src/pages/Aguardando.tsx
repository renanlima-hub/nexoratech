const pacientes = [
  "Pietro Castilho",
  "Kayke Sanatana",
];

export default function Aguardando() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <section className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-2">
          Pacientes aguardando
        </h1>
        <p className="text-slate-500 mb-8">
          Registros pendentes de encaminhamento ou confirmação.
        </p>

        <div className="space-y-4">
          {pacientes.map((paciente) => (
            <div
              key={paciente}
              className="border border-amber-200 bg-amber-50 rounded-2xl p-4 text-slate-700"
            >
              {paciente}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}