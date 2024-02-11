import { Menu } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";

export default function ProjectCard({ projects }) {
  const { t } = useTranslation();

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
    >
      {projects.map((project) => (
        <li
          key={project.id}
          className="overflow-hidden rounded-xl border border-gray-200"
        >
          <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
            <img
              src={project.imageUrl}
              alt={project.name}
              className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
            />
            <div className="text-sm font-medium leading-6 text-gray-900">
              {project.name}
            </div>
            <Menu as="div" className="relative ml-auto">
              <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Open options</span>
                <EllipsisHorizontalIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </Menu.Button>
            </Menu>
          </div>
          <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
            <div className="py-3">
              <dd className="text-gray-700">
                <p>
                  <span className="font-medium text-gray-900">
                    {t("projectCardTitles.description")}: {""}
                  </span>
                  {project.description}
                </p>
              </dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">{t("projectCardTitles.status")}</dt>
              <dd className="flex items-start gap-x-2">
                <div className="rounded-md py-1 px-2 text-xs font-medium ring-inset text-black bg-indigo-50">
                  {project.status}
                </div>
              </dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
  );
}
