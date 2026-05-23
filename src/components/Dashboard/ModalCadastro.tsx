import { useState } from "react";

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
  const [formData, setFormData] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const titulo = {
    paciente: "Novo paciente",
    triagem: "Nova triagem",
    agendamento: "Novo agendamento",
    voluntario: "Novo voluntário",
  }[tipo];

  const descricao = {
    paciente: "Preencha os dados principais do paciente.",
    triagem:
      "Registre a descrição, urgência e status da triagem.",
    agendamento:
      "Informe paciente, voluntário, data e local.",
    voluntario:
      "Cadastre os dados do dentista voluntário.",
  }[tipo];

  const campos = {
    paciente: [
      "nome",
      "cpf",
      "telefone",
      "email",
    ],

    triagem: [
      "paciente",
      "descricao",
      "urgencia",
      "status",
    ],

    agendamento: [
      "paciente",
      "voluntario",
      "dataHora",
      "local",
      "status",
    ],

    voluntario: [
      "nome",
      "cro",
      "telefone",
      "email",
    ],
  }[tipo];

  const handleChange = (
    campo: string,
    valor: string,
  ) => {
    setFormData((prev: any) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const handleSalvar = async () => {
    try {
      setLoading(true);

      let endpoint = "";
      let body: any = {};

      if (tipo === "paciente") {
        endpoint = "/paciente";

        body = {
          nome: formData.nome,
          cpf: formData.cpf,
          telefone: formData.telefone,
          email: formData.email,
        };
      }

      if (tipo === "voluntario") {
        endpoint = "/voluntario";

        body = {
          nome: formData.nome,
          cro: formData.cro,
          telefone: formData.telefone,
          email: formData.email,
        };
      }

      if (tipo === "triagem") {
        endpoint = "/triagem";

        body = {
          paciente: formData.paciente,
          descricao: formData.descricao,
          urgencia: formData.urgencia,
          status: formData.status,
        };
      }

      if (tipo === "agendamento") {
        endpoint = "/agendamento";

        body = {
          paciente: formData.paciente,
          voluntario: formData.voluntario,
          dataHora: formData.dataHora,
          local: formData.local,
          status: formData.status,
        };
      }

      console.log("Enviando:", body);

      const response = await fetch(
        `https://nexoratech-restfullapi.onrender.com${endpoint}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        },
      );

      if (!response.ok) {
        const erro = await response.text();

        console.error("Erro API:", erro);

        throw new Error(erro);
      }

      alert("Cadastro realizado com sucesso!");

      onClose();

      window.location.reload();
    } catch (error) {
      console.error(error);

      alert("Erro ao cadastrar. Veja o console.");
    } finally {
      setLoading(false);
    }
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
              <label className="block text-sm text-slate-400 mb-2 capitalize">
                {campo}
              </label>

              <input
                type="text"
                placeholder={campo}
                value={formData[campo] || ""}
                onChange={(e) =>
                  handleChange(
                    campo,
                    e.target.value,
                  )
                }
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
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded-2xl px-5 py-3 font-semibold"
          >
            {loading
              ? "Salvando..."
              : "Salvar cadastro"}
          </button>
        </div>
      </section>
    </div>
  );
}