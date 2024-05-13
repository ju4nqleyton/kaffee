import Divider from "./Divider";

const links = [
  { name: "Nuestro sitio", href: "#" },
  { name: "Café", href: "#" },
  { name: "Americano", href: "#" },
  { name: "Espresso", href: "#" },
];

export default function AboutUs() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Kaffee
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Somos un pequeño emprendimiento ubicado en la vibrante ciudad de
            Ibagué, justo en la encantadora Plaza Bolívar. En Kaffee, nos
            dedicamos a ofrecer una experiencia única con nuestro delicioso café
            americano y espresso. Aunque llevamos poco tiempo, hemos logrado
            cautivar a nuestros clientes con la calidad y el sabor excepcional
            de nuestro café.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-gray-900 sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
        <Divider />
      </div>
    </div>
  );
}
