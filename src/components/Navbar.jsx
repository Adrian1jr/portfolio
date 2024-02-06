import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { logo } from "../assets/barrel";
import { IoLogoGithub } from "react-icons/io";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const menuItems = [
    { id: 1, title: "Sobre mi", link: "#" },
    { id: 2, title: "Habilidades", link: "#" },
    { id: 3, title: "Trabajos", link: "#" },
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
    <Disclosure
      as="nav"
      className={`bg-white shadow transition-all ease-in-out duration-1000 ${
        isScrolled ? "fixed top-0 w-full z-50" : ""
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
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.link}
                      className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-base font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Github button */}
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <IoLogoGithub className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {menuItems.map((item) => (
                <Disclosure.Button
                  key={item.id}
                  as="a"
                  href={item.link}
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >
                  {item.title}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
