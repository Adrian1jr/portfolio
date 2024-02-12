import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";
import { ascarLogo, geekoShop, pokedexLogo } from "../assets/barrel";

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      name: "Ascar Sistemas",
      description: t("projectCards.ascar.description"),
      status: t("projectCards.ascar.status"),
      imageUrl: ascarLogo,
      url: "https://www.ascarsistemas.com",
    },
    {
      id: 2,
      name: "Geeko Shop",
      description: t("projectCards.geekoShop.description"),
      status: t("projectCards.geekoShop.status"),
      imageUrl: geekoShop,
      url: "https://adrian1jr.github.io/",
    },
    {
      id: 3,
      name: "Pokédex",
      description: t("projectCards.pokedex.description"),
      status: t("projectCards.pokedex.status"),
      imageUrl: pokedexLogo,
      url: "",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl py-20 lg:py-32 md:py-32" id="projects">
      <h2 className="text-3xl text-center font-bold tracking-tight sm:text-4xl">
        {t("projects.title")}
      </h2>

      <p className="mt-2 mb-6 text-center text-lg text-gray-500">
        {t("projects.description")}
      </p>

      <div className="flex justify-center max-w-7xl lg:max-w-7xl md:max-w-5xl sm:max-w-3xl">
        <ProjectCard projects={projects} />
      </div>
    </div>
  );
}
