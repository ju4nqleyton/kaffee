import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              ¿Y tú, ya tomaste tu Kaffee?
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Deléitate con nuestro café, nacido en las alturas de Cunday,
              Tolima, en la Finca Los Pinos. Con gran dedicación, preparamos
              americanos y espressos para ti.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://wa.link/sb5n29"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-green-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
              >
                Ordenar Kaffee
              </a>
              <Link
                to={"/home"}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Descubre más <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
