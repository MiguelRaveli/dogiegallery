import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../imgs/Logo.svg";
const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-gray-800 text-white hover:bg-gray-900 hover:text-white rounded-md px-2 py-2 duration-300"
      : "text-black hover:bg-gray-800 hover:text-white rounded-md px-2 py-2 duration-300";

  return (
    <div className="flex flex-col content-center flex-column p-5 items-center font-semibold h-[20vh] sm:flex-row justify-around lg:text-2xl">
      <img src={Logo} alt="logo" className="w-52 sm:w-60 lg:w-72" />
      <nav className="m-5">
        <ul className="flex lg:gap-7">
          <li>
            <NavLink className={linkClass} to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to={"/about"}>
              Sobre
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to={"/gallery"}>
              Galeria
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to={"/contact"}>
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
