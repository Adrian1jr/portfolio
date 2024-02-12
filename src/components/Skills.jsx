import { useTranslation } from "react-i18next";
import {
  reactLogo,
  nodeLogo,
  htmlLogo,
  cssLogo,
  jsLogo,
  gitLogo,
  angularLogo,
  nestLogo,
  mongoLogo,
  mySqlLogo,
} from "../assets/barrel";

export default function Skills() {
  const { t } = useTranslation();

  const skills = [
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "Angular", logo: angularLogo },
    { name: "React", logo: reactLogo },
    { name: "Node.js", logo: nodeLogo },
    { name: "Nest.js", logo: nestLogo },
    { name: "Git", logo: gitLogo },
    { name: "MongoDB", logo: mongoLogo },
    { name: "MySQL", logo: mySqlLogo },
  ];

  return (
    <>
      <div className="bg-white py-24 sm:py-32" id="skills">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl text-center font-bold tracking-tight sm:text-4xl">
            {t("skills.title")}
          </h2>
          <p className="mt-2 mb-6 text-center text-lg text-gray-500">
            {t("skills.description")}
          </p>
          <div className="mx-auto mt-14 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {skills.map((skill, index) => (
              <img
                key={index}
                src={skill.logo}
                alt={skill.name}
                className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
