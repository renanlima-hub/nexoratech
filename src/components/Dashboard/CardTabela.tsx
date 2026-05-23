type Props = {
  titulo: string;
  descricao: string;
  children: React.ReactNode;
};

export default function CardTabela({
  titulo,
  descricao,
  children,
}: Props) {
  return (
    <section className="bg-slate-950 border border-slate-800 rounded-3xl p-6">
      <h2 className="text-3xl font-bold text-white mb-2">
        {titulo}
      </h2>

      <p className="text-slate-400 text-sm mb-6">
        {descricao}
      </p>

      {children}
    </section>
  );
}