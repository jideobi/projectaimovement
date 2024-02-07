import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import Logo from "../assets/Logo.png";
import { Link } from "react-scroll";

const Na = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed  w-full h-[100px] flex justify-between items-center  px-4 text-[#0a192f] shadow-lg shadow-cyan-500/50  bg-[#FFFFFF]">
      <div className="">
        <Link to="home" smooth={true} duration={500}>
          <img
            className="hover:scale-110 duration-500"
            src={Logo}
            alt="logo"
            style={{ maxWidth: 60 }}
          />
        </Link>
      </div>

      {/* menu */}
      <div className=" hidden lg:flex">
        <ul className="hidden lg:flex font-extrabold text-[18px] mr-[200px] p-2 m-2 ">
          <li className="hover:text-orange-500">
            <Link to="home" smooth={true} duration={500}>
              HOME
            </Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="about" smooth={true} duration={500}>
              ABOUT
            </Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="service" smooth={true} duration={500}>
              SERVICE
            </Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="work" smooth={true} duration={500}>
              PROJECTS
            </Link>
          </li>
        </ul>

        <ul className="hidden md:flex p-2 m-2">
          <li className=" ">
            <a
              className=""
              href="https://www.linkedin.com/in/jideobi-chebem-7aba10205"
            >
              <FaTwitter size={30} />
            </a>
          </li>

          <li className=" ">
            <a
              className=""
              href="https://www.linkedin.com/in/jideobi-chebem-7aba10205"
            >
              <FaFacebook size={30} />
            </a>
          </li>

          <li className=" ">
            <a
              className=""
              href="https://www.linkedin.com/in/jideobi-chebem-7aba10205"
            >
              <FaInstagram size={30} />
            </a>
          </li>

          <li className=" ">
            <a
              className=""
              href="https://www.linkedin.com/in/jideobi-chebem-7aba10205"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
        <ul>
          <li className="border-2 border-slate-600 px-10 py-2 m-2">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* hambuger */}
      <div onClick={handleClick} className="lg:hidden z-10 text-[#0a192f]">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile / menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-white text-[#0a192f] flex flex-col justify-center items-center "
        }
      >
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skill
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-3xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Na;
