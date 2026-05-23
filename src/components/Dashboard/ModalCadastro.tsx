type TipoCadastro =
  | "paciente"
  | "triagem"
  | "agendamento"
  | "voluntario";

type Props = {
  tipo: TipoCadastro;
  onClose: () => void;
};

export default function ModalCadastro({
  tipo,
  onClose,
}: Props) {
  const titulo = {
    paciente: "Novo paciente",
    triagem: "Nova triagem",
    agendamento: "Novo agendamento",
    voluntario: "Novo voluntário",
  }[tipo];

  const descricao = {
    paciente: "Preencha os dados principais do paciente.",
    triagem: "Registre a descrição, urgência e status da triagem.",
    agendamento:
      "Informe paciente, voluntário, data e local.",
    voluntario:
      "Cadastre os dados do dentista voluntário.",
  }[tipo];

  const campos = {
    paciente: [
      "Nome completo",
      "CPF",
      "Telefone",
      "E-mail",
    ],

    triagem: [
      "Paciente",
      "Descrição",
      "Urgência",
      "Status",
    ],

    agendamento: [
      "Paciente",
      "Voluntário",
      "Data",
      "Local",
    ],

    voluntario: [
      "Nome completo",
      "CRO",
      "Telefone",
      "E-mail",
    ],
  }[tipo];

  const handleSalvar = () => {
    alert(
      "Cadastro simulado com sucesso.",
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
      <section className="w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-3xl p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-cyan-400 text-xs uppercase tracking-[0.2em]">
              Cadastro
            </p>

            <h2 className="text-3xl font-extrabold text-white mt-2">
              {titulo}
            </h2>

            <p className="text-slate-400 mt-2">
              {descricao}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {campos.map((campo) => (
            <div key={campo}>
              <label className="block text-sm text-slate-400 mb-2">
                {campo}
              </label>

              <input
                type="text"
                placeholder={campo}
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-2xl px-4 py-3 outline-none focus:border-cyan-400 transition"
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="border border-slate-700 text-slate-300 rounded-2xl px-5 py-3"
          >
            Cancelar
          </button>

          <button
            onClick={handleSalvar}
            className="bg-blue-600 hover:bg-blue-500 text-white rounded-2xl px-5 py-3 font-semibold"
          >
            Salvar cadastro
          </button>
        </div>
      </section>
    </div>
  );
}