import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-200 text-center p-6 h-[13vh] xl:h-[15vh] flex flex-col justify-center items-center">
        <div className="flex justify-center mb-4 space-x-6">
          <Link target="_blank" to="https://github.com/MiguelRaveli">
            {" "}
            <FaGithub
              className="text-gray-700 hover:text-gray-900 text-3xl"
              target="_blank"
              rel="noopener noreferrer"
            />
          </Link>

          <Link
            target="_blank"
            to="https://www.linkedin.com/in/miguel-raveli-gusmao/"
          >
            {" "}
            <FaLinkedin
              className="text-gray-700 hover:text-gray-900 text-3xl"
              target="_blank"
              rel="noopener noreferrer"
            />
          </Link>
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Dogie Gallery. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
