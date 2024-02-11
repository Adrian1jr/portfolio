import { Link } from "react-scroll";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { logo } from "../assets/barrel";
import { useEffect, useState } from "react";
import LanguageMenu from "./LanguageMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const menuItems = [
    { id: 1, title: "Sobre mi", link: "#about" },
    { id: 2, title: "Habilidades", link: "#" },
    { id: 3, title: "Proyectos", link: "#" },
    { id: 4, title: "Contacto", link: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    //fixed top-0 w-full z-50 TODO: fix this issue class
    <Disclosure
      as="nav"
      className={`bg-white shadow transition-all ease-in-out duration-1000 ${
        isScrolled ? "" : ""
      }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-7 w-auto" src={logo} alt="Your Company" />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 cursor-pointer">
                  {menuItems.map((item) => (
                    <Link
                      key={item.id}
                      to={item.link.substring(1)}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={1000}
                      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-base font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center gap-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <LanguageMenu />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {({ close }) => (
              <div className="space-y-1 pb-4 pt-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.link.substring(1)}
                    spy={true}
                    smooth={true}
                    offset={window.scrollY > 50 ? -70 : -350}
                    duration={500}
                    className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 cursor-pointer"
                    onClick={() => {
                      close();
                    }}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
