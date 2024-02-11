import { useTranslation } from "react-i18next";
import { about } from "../assets/barrel";

export default function About() {
  const { t } = useTranslation();

  const timeline = [
    {
      key: "marketingDigital",
      name: "Marketing Digital",
      description:
        "Desarrollo de sitios web y marketing digital en la empresa Intra Solutions.",
      date: "11/01/2021 - 11/04/2021",
      dateTime: "2021-04",
    },
    {
      key: "programadorFrontEnd",
      name: "Programador Front-End",
      description:
        "Programador Web, Maquetador básico y soporte preventivo y correctivo en la empresa Syntranet.",
      date: "05/04/2021 - 05/11/2022",
      dateTime: "2021-11",
    },
    {
      key: "freelance",
      name: "Freelance",
      description:
        "Experto en la construcción de soluciones personalizadas para satisfacer las necesidades específicas de los clientes.",
      date: "05/04/2022 - Actualidad",
      dateTime: "2022-12",
    },
    {
      key: "programadorFullStack",
      name: "Programador Full-Stack",
      description:
        "Programacion front end y backend con multiples lenguajes/frameworks en la empresa Lead One LLC.",
      date: "07/11/2022 - Actualidad",
      dateTime: "2022-07",
    },
  ];

  return (
    <>
      {/* Top */}
      <div className="mx-auto max-w-7xl pt-20 lg:pt-0 md:pt-0" id="about">
        <div
          className="mx-auto flex max-w-2xl flex-col gap-8 px-6 py-6 
                 sm:p-8 lg:mx-0 lg:max-w-7xl lg:flex-row
                 xl:gap-x-14"
        >
          <div className="w-full flex-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Adrian Tapia Herrera
            </h2>
            <p className="mt-6 text-lg leading-8">{t("aboutDescription")}</p>
          </div>
          <img
            className="h-96 w-full flex-none rounded-2xl object-cover shadow-md 
            lg:aspect-video lg:h-auto lg:max-w-lg"
            src={about}
            alt="Foto de Adrian Tapia graduado de la universidad ITNL."
          />
        </div>
      </div>

      {/* Bottom */}
      <h2 className="text-3xl text-center font-bold tracking-tight text-black pb-6 mt-8 sm:text-4xl">
        {t("aboutExperienceTitle")}
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
                  {t(`timeline.${item.key}.date`)}

                  <div
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0 sm:hidden lg:flex hidden"
                    aria-hidden="true"
                  />
                </time>
                <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-black">
                  {t(`timeline.${item.key}.name`)}
                </p>
                <p className="mt-1 text-base leading-7 text-black">
                  {t(`timeline.${item.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
