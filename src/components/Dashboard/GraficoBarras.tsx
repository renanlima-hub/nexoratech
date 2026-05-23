type Props = {
  titulo: string;
  dados: {
    label: string;
    valor: number;
  }[];
};

export default function GraficoBarras({
  titulo,
  dados,
}: Props) {
  const maiorValor = Math.max(
    ...dados.map((item) => item.valor),
  );

  return (
    <section className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
      <h2 className="text-3xl font-bold text-white mb-5">
        {titulo}
      </h2>

      <div className="space-y-5">
        {dados.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-300">
                {item.label}
              </span>

              <span className="text-cyan-400 font-bold">
                {item.valor}
              </span>
            </div>

            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                style={{
                  width: `${(item.valor / maiorValor) * 100}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}