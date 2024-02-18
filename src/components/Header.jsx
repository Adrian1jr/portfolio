import { Link } from "react-scroll";
import { avatar } from "../assets/barrel";
import { useTranslation } from "react-i18next";
import "./css/Header.css";
import { FaArrowRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  const { t } = useTranslation();

  return (
    <section
      className="header-container flex text-gray-600 body-font mx-auto 
      max-w-7xl sm:px-6 lg:px-8 h-screen pb-0 lg:pb-28"
      id="header"
    >
      <div
        className="container mx-auto flex px-5 md:flex-row flex-col 
        items-center lg:pt-0 md:pt-0 gap-0 lg:gap-10 sm:gap-5"
      >
        <div className="image-container">
          <img alt="hero" src={avatar} />
        </div>

        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black mt-3 sm:text-4xl lg:text-5xl">
            Adrian Tapia
          </h2>

          <p className="text-3xl font-bold tracking-tight text-black mt-3 sm:text-4xl lg:text-5xl">
            {t("headerTitle")}
          </p>

          <p className="mt-6 text-lg leading-7 text-gray-500 ">
            {t("headerDescription")}
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              to={"contact"}
              smooth={true}
              offset={window.scrollY > 50 ? -120 : -140}
              duration={1000}
              className="inline-flex items-center gap-x-1.5 rounded-full bg-indigo-600 px-4 py-1.5 text-base font-semibold text-white shadow-sm cursor-pointer transition-all duration-300
              transform hover:scale-105 hover:shadow-md  
              "
            >
              {t("headerScrollButton")}
              <FaArrowRight className="ml-0.5 h-4 w-4" aria-hidden="true" />
            </Link>

            <button
              type="button"
              onClick={() => {
                window.open("https://github.com/Adrian1jr", "_blank");
              }}
              className="inline-flex items-center gap-x-1.5 rounded-full bg-slate-800 px-4 py-1.5 text-base font-semibold text-white shadow-sm cursor-pointer transition-all duration-100 
              transform hover:scale-105"
            >
              GitHub
              <FaGithub className="ml-0.5 h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
