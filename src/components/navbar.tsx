import { Link } from "react-router-dom";


export function Navbar() {
  return (
    <nav className="border-b border-white/30 bg-gradient-to-r from-pink-100 via-blue-100 to-teal-100 p-4 shadow-md backdrop-blur-md">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        <h1 className="text-xl font-semibold tracking-tight text-gray-700 sm:text-2xl">
          <Link to="/" className="transition hover:text-gray-900">
            🎨 Lernwelt G2 & G3
          </Link>
        </h1>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="rounded-lg bg-white/60 px-4 py-2 text-sm text-gray-800 shadow-sm transition hover:bg-white/80 sm:text-base"
          >
            Themenauswahl
          </Link>
          <Link
            to="/pruefen"
            className="rounded-lg bg-white/60 px-4 py-2 text-sm text-gray-800 shadow-sm transition hover:bg-white/80 sm:text-base"
          >
            Prüfungsmodus
          </Link>
        </div>
      </div>
    </nav>
  );
}
