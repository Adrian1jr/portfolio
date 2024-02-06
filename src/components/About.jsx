export default function About() {
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
    <>
      <h2 className="text-3xl text-center font-bold tracking-tight text-black pb-6 sm:text-4xl">
        Experiencia
      </h2>
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
    </>
  );
}
