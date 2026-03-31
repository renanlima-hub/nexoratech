import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
};

export default function Contato() {
  const [enviado, setEnviado] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Dados do formulário:", data);
    setEnviado(true);
    reset();

    setTimeout(() => {
      setEnviado(false);
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 px-6 py-16 dark:bg-slate-950 dark:text-slate-100">
      <section className="max-w-4xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-3xl shadow-sm p-8 md:p-10 dark:bg-slate-900 dark:border-slate-800">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 dark:text-cyan-300">
            Entre em contato
          </h1>

          <p className="text-slate-600 text-lg mb-8 dark:text-slate-300">
            Preencha o formulário abaixo para enviar uma mensagem
            para a equipe da NexoraTech.
          </p>

          {enviado && (
            <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800 dark:bg-emerald-950 dark:border-emerald-800 dark:text-emerald-300">
              Mensagem enviada com sucesso.
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block mb-2 font-semibold text-slate-700 dark:text-slate-200">
                Nome
              </label>
              <input
                type="text"
                placeholder="Informe seu nome completo"
                {...register("nome", {
                  required: "O nome é obrigatório",
                  minLength: {
                    value: 3,
                    message: "O nome deve ter pelo menos 3 caracteres",
                  },
                })}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:focus:border-cyan-400 dark:focus:ring-cyan-900"
              />
              {errors.nome && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {errors.nome.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-semibold text-slate-700 dark:text-slate-200">
                E-mail
              </label>
              <input
                type="email"
                placeholder="Digite seu e-mail"
                {...register("email", {
                  required: "O e-mail é obrigatório",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Digite um e-mail válido",
                  },
                })}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:focus:border-cyan-400 dark:focus:ring-cyan-900"
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-semibold text-slate-700 dark:text-slate-200">
                Assunto
              </label>
              <input
                type="text"
                placeholder="Digite o assunto"
                {...register("assunto", {
                  required: "O assunto é obrigatório",
                  minLength: {
                    value: 3,
                    message: "O assunto deve ter pelo menos 3 caracteres",
                  },
                })}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:focus:border-cyan-400 dark:focus:ring-cyan-900"
              />
              {errors.assunto && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {errors.assunto.message}
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-semibold text-slate-700 dark:text-slate-200">
                Mensagem
              </label>
              <textarea
                rows={5}
                placeholder="Digite sua mensagem"
                {...register("mensagem", {
                  required: "A mensagem é obrigatória",
                  minLength: {
                    value: 10,
                    message: "A mensagem deve ter pelo menos 10 caracteres",
                  },
                })}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:focus:border-cyan-400 dark:focus:ring-cyan-900"
              />
              {errors.mensagem && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {errors.mensagem.message}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="bg-blue-900 text-white font-semibold px-6 py-3 rounded-2xl hover:bg-blue-800 transition dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
              >
                Enviar mensagem
              </button>

              <button
                type="button"
                onClick={() => reset()}
                className="border border-slate-300 text-slate-700 font-semibold px-6 py-3 rounded-2xl hover:bg-slate-100 transition dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Limpar campos
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}