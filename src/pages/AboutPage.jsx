import React from "react";
import { Link } from "react-router-dom";
import AboutCards from "../components/AboutCards";

const AboutPage = () => {
  return (
    <>
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto px-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Sobre a Dogie Gallery
          </h1>

          {/* Site Identity */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700">Quem Somos</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              A <strong>Dogie Gallery</strong> é uma galeria online dedicada a
              mostrar a diversidade e beleza das diferentes raças de cães. Nosso
              objetivo é reunir informações sobre cada raça, desde
              características físicas até personalidades, ajudando os amantes de
              cães a conhecerem melhor esses incríveis companheiros.
            </p>
          </div>

          {/* Mission and Values */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700">
              Missão e Valores
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Nossa missão é proporcionar uma experiência informativa e
              divertida para todos os amantes de cães, destacando a importância
              de conhecer e respeitar as diferenças de cada raça. Valorizamos o
              amor, a responsabilidade e a convivência saudável entre humanos e
              seus amigos de quatro patas.
            </p>
          </div>

          {/* Differentiators */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-700">
              O Que Nos Torna Únicos
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Na Dogie Gallery, acreditamos que cada cão é único e especial.
              Nossa galeria é uma fonte rica de informações e imagens de
              qualidade, permitindo que você explore as raças de forma
              interativa e educativa. Temos um catálogo extenso e em constante
              atualização, trazendo curiosidades e informações exclusivas sobre
              as raças.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <h2 className="text-2xl font-semibold text-gray-700">
              Explore Mais!
            </h2>
            <p className="mt-4 mb-6 text-gray-600 leading-relaxed xl:pr-52 xl:pl-52">
              Navegue pela nossa galeria e descubra tudo o que há para saber
              sobre essas adoráveis criaturas. Conecte-se com a Dogie Gallery e
              explore o mundo dos cães.
            </p>
            <Link
              to={"/gallery"}
              className="mt-6 bg-red-400 text-white py-2 px-4 rounded-md hover:bg-red-500 transition duration-200"
            >
              Ver Galeria
            </Link>
          </div>

          {/* Image Section */}
          <AboutCards />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
