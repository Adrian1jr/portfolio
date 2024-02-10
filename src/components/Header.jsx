import { avatar } from "../assets/barrel";

export default function Header() {
  return (
    <section className="flex text-gray-600 body-font mx-auto max-w-7xl sm:px-6 lg:px-8 h-dvh">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center lg:pt-0 md:pt-0">
        <div className="image-container">
          <img alt="hero" src={avatar} />
        </div>
        <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black mt-3 sm:text-4xl lg:text-5xl">
            Adrian Tapia
          </h2>

          <p className="text-3xl font-bold tracking-tight text-black mt-3 sm:text-4xl lg:text-5xl">
            Full Stack Developer
          </p>

          <p className="mt-6 text-lg leading-7 text-gray-500">
            Soy un desarrollador Full Stack con experiencia en el desarrollo de
            aplicaciones web. Me apasiona el desarollo frontend UI/UX y aprender
            nuevas tecnologías.
          </p>

          <div className="mt-6 flex">
            <a
              href="#"
              className="text-lg font-semibold leading-6 text-gray-900"
            >
              Ver mi trabajo &nbsp;
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
