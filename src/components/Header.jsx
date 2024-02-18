import { Link } from "react-scroll";
import { avatar } from "../assets/barrel";
import "./css/Header.css";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <section
      className="header-container flex text-gray-600 body-font mx-auto 
      max-w-7xl sm:px-6 lg:px-8 h-screen pb-0 lg:pb-32"
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

          <p className="mt-6 text-lg leading-7 text-gray-500">
            {t("headerDescription")}
          </p>

          <div className="mt-6 flex">
            <Link
              key={"hire-me-button"}
              to={"contact"}
              spy={true}
              smooth={true}
              offset={window.scrollY > 50 ? -120 : -140}
              duration={1000}
              className="
              bg-gray-100 rounded-full px-5 py-2 transition duration-500 ease-in-out
              text-lg font-semibold leading-6 text-gray-900 cursor-pointer
              hover:bg-gray-200 hover:text-gray-900 border-x-2"
            >
              {t("headerScrollButton")} &nbsp;
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
