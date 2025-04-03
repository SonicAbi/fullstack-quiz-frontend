import { Link } from "react-router-dom";


export function Navbar() {
  return (
    <nav className="bg-gradient-to-l from-myLightTurquoise to-violet-500 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-myLightGray underline">
          Learning website only for G2✌🏼
        </h1>
        <div className="flex space-x-4">
          <Link to='/' className="px-4 py-2 rounded-md font-medium">
            Lernmodus
          </Link>
          <Link to='/pruefen'
            className="px-4 py-2 rounded-md font-medium">
            Prüfungsmodus
          </Link>
        </div>
      </div>
    </nav>
  );
}
