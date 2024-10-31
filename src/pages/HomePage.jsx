import React from "react";
import { Link } from "react-router-dom";
import womanHoldingDog from "../imgs/womanHoldingDog.svg";
import ShowGallerySample from "../components/ShowGallerySample";
import { useMediaQuery } from "react-responsive";

const HomePage = () => {
  const isMobile = useMediaQuery({ maxWidth: 639 });

  // Variáveis para classes de estilo
  const titleStyle = "text-red-500 font-semibold text-center sm:text-left";
  const subtitleStyle = "text-center m-6 sm:text-left mt-5 mb-5 ml-0 mr-0";

  return (
    <section className="box-border w-full font-semibold sm:grid grid-cols-2 h-[67vh] flex flex-col justify-around xl:h-[70vh]">
      {/* Título do projeto e card da galeria de demonstração */}
      <div className="sm:flex flex-col justify-between">
        <div className="p-5 flex flex-col items-center sm:items-start pl-8 md:pl-20 lg:p-20 2xl:pl-32">
          <h1
            className={`${titleStyle} text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl`}
          >
            Quatro pernas são melhores que duas
          </h1>
          <h2 className={`${subtitleStyle} xl:text-sm`}>
            Descubra o mundo encantador dos nossos amigos de quatro patas e veja
            como eles tornam a vida mais especial
          </h2>
          <Link
            className="bg-red-500 text-white px-3 py-2 rounded font-normal xl:text-sm"
            to="/gallery"
          >
            Ver Galeria
          </Link>
        </div>
        {!isMobile && <ShowGallerySample />}
      </div>

      {/* Foto de uma mulher segurando um cachorro / banner */}
      <div className="sm:h-1/2 flex items-center justify-center md:h-full">
        <img
          className="w-2/4 bg-red-500 rounded-full sm:w-3/4 2xl:w-2/4"
          src={womanHoldingDog}
          alt="Mulher segurando um cachorro"
        />
      </div>
    </section>
  );
};

export default HomePage;
