import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-green-700">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            ¡Ups! Parece que te has perdido.
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Lo sentimos, no pudimos encontrar la página que estás buscando.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to={"/home"}
              className="rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              Volver
            </Link>
            <a
              href="https://wa.link/sb5n29"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-gray-900"
            >
              Ordenar Kaffee <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
