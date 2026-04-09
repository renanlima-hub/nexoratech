import renan from "../assets/renan.jpg";
import andre from "../assets/andre.jpg";

export default function Integrantes() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-slate-800 px-6 py-16">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-10 text-center">
          Quem somos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-8 text-center">
            <img
              src={renan}
              alt="Renan"
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-200 mb-4"
            />

            <h2 className="text-xl font-bold text-blue-900">
              Renan Lima Santos
            </h2>

            <p className="text-slate-600 mb-4">RM: 568321</p>

            <div className="flex flex-col gap-2 items-center">
              <a
                href="https://github.com/renanlima-hub"
                target="_blank"
                rel="noreferrer"
                className="text-blue-900 font-semibold hover:underline"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/renanlimasantos/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-900 font-semibold hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-3xl shadow-xl p-8 text-center">
            <img
              src={andre}
              alt="André"
              className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-200 mb-4"
            />

            <h2 className="text-xl font-bold text-blue-900">
              André Lucats
            </h2>

            <p className="text-slate-600 mb-4">RM: 567145</p>

            <div className="flex flex-col gap-2 items-center">
              <a
                href="https://github.com/alucats"
                target="_blank"
                rel="noreferrer"
                className="text-blue-900 font-semibold hover:underline"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/andrelucats/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-900 font-semibold hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              Gustavo Souza Nascimento
            </h3>

            <p className="text-slate-600 mb-2">RM: 567134</p>

            <a
              href="https://www.linkedin.com/in/gustavo-souza-nascimento-698a81305/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-900 font-semibold hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}