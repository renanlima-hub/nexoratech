type Props = {
  titulo: string;
  dados: {
    mes: string;
    valor: number;
  }[];
};

export default function GraficoEvolucao({
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

      <div className="flex items-end justify-between gap-3 h-52">
        {dados.map((item, index) => {
          const altura = Math.max(
            (item.valor / maiorValor) * 170,
            20,
          );

          const subiu =
            index === 0 ||
            item.valor >= dados[index - 1].valor;

          return (
            <div
              key={item.mes}
              className="flex flex-col items-center flex-1"
            >
              <span
                className={`text-xs mb-2 font-bold ${
                  subiu
                    ? "text-emerald-400"
                    : "text-red-400"
                }`}
              >
                {subiu ? "↑" : "↓"} {item.valor}
              </span>

              <div className="w-full bg-slate-800 rounded-t-2xl overflow-hidden flex items-end">
                <div
                  className={`w-full rounded-t-2xl ${
                    subiu
                      ? "bg-gradient-to-t from-emerald-500 to-cyan-300"
                      : "bg-gradient-to-t from-red-500 to-orange-300"
                  }`}
                  style={{
                    height: `${altura}px`,
                  }}
                />
              </div>

              <p className="text-slate-400 text-sm mt-3">
                {item.mes}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}