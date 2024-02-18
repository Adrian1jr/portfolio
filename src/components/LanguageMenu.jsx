import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { banderaMexico, banderaUSA } from "../assets/barrel";
import { LanguageIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

export default function LanguageMenu() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const menuItems = [
    { id: 2, title: "Spanish", img: banderaMexico, lang: "es" },
    { id: 1, title: "English", img: banderaUSA, lang: "en" },
  ];

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang);
    changeLanguage(lang);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className="bg-gray-100 rounded-full px-4 py-1
          transition-all ease-in-out duration-300
          hover:bg-gray-200"
        >
          <div className="flex gap-1.5 items-center">
            <LanguageIcon className="h-6 w-6" color="" aria-hidden="true" />
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1 ">
            {menuItems.map((item) => (
              <Menu.Item key={item.id}>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-indigo-600 text-white" : "text-gray-900"
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={() => handleLanguageChange(item.lang)}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-5 h-5 mr-2"
                    />
                    {item.title}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
