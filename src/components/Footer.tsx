export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-lg font-bold text-blue-900">NexoraTech</p>
          <p className="text-sm text-slate-500">
            Projeto acadêmico desenvolvido para demonstrar uma solução digital
            de apoio à organização de atendimentos.
          </p>
        </div>

        <div className="text-sm text-slate-500 text-center md:text-right">
          <p>Front-End com React, TypeScript e Tailwind</p>
          <p>© 2026 NexoraTech</p>
        </div>
      </div>
    </footer>
  );
}