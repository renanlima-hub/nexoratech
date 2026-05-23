type Props = {
  titulo: string;
  descricao: string;
  onClick: () => void;
};

export default function CardAcaoRapida({
  titulo,
  descricao,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="text-left bg-slate-900 border border-slate-800 hover:border-cyan-400 rounded-2xl p-5 transition group"
    >
      <div className="w-11 h-11 rounded-2xl bg-blue-600/20 text-cyan-300 flex items-center justify-center font-extrabold mb-4 group-hover:bg-cyan-400 group-hover:text-slate-950 transition">
        +
      </div>

      <h3 className="text-xl font-bold text-white">
        {titulo}
      </h3>

      <p className="text-slate-400 text-sm mt-2 leading-6">
        {descricao}
      </p>
    </button>
  );
}