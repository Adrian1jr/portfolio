import { avatar } from "../assets/barrel";

export default function Header() {
  const timeline = [
    {
      name: "Marketing Digital",
      description:
        "Desarrollo de sitios web y marketing digital en la empresa Intra Solutions.",
      date: "11/01/2021 - 11/04/2021",
      dateTime: "2021-04",
    },
    {
      name: "Programador Front-End",
      description:
        "Programador Web, Maquetador basico y soporte preventivo y correctivo en la empresa Syntranet.",
      date: "05/04/2021 - 05/11/2022",
      dateTime: "2021-11",
    },
    {
      name: "Freelance",
      description:
        "Experto en la construcción de soluciones personalizadas para satisfacer las necesidades específicas de los clientes. ",
      date: "05/04/2022 - Actualidad",
      dateTime: "2022-12",
    },
    {
      name: "Programador Full-Stack",
      description:
        "Programacion front end y backend con multiples lenguajes/frameworks en la empresa Lead One LLC.",
      date: "07/11/2022 - Actualidad",
      dateTime: "2022-07",
    },
  ];

  return (
    <section className="text-gray-600 body-font mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="container mx-auto flex px-5 pt-16 pb-12 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="h-96 w-full flex-none object-cover lg:h-auto lg:max-w-sm"
            alt="hero"
            src={avatar}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-5xl">
            Adrian Tapia
          </h2>

          <p className="text-3xl font-bold tracking-tight text-black sm:text-5xl mt-3">
            Full Stack Developer
          </p>

          <p className="mt-6 text-lg leading-7 text-gray-500">
            Soy un desarrollador Full Stack con experiencia en el desarrollo de
            aplicaciones web. Me apasiona el desarollo frontend UI/UX y aprender
            nuevas tecnologías.
          </p>

          <div className="mt-6 flex">
            <a
              href="#"
              className="text-lg font-semibold leading-6 text-gray-900"
            >
              Ver mi trabajo &nbsp;
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mb-8 mt-14">
        <div className="mx-auto -mt-8 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-10 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm font-semibold leading-6 text-indigo-600"
                >
                  <svg
                    viewBox="0 0 4 4"
                    className="mr-4 h-1 w-1 flex-none"
                    aria-hidden="true"
                  >
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                  </svg>
                  {item.date}
                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0 sm:hidden lg:flex hidden"
                    aria-hidden="true"
                  />
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  {item.name}
                </p>
                <p className="mt-1 text-base leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
