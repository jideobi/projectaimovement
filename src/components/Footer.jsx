import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className=" lg:grid lg:grid-cols-2 ">
        <div className="lg:py-[150px] py-[80px] text-center text-white bg-[#1c1616]">
          <h1 className="lg:text-6xl lg:mx-[150px] font-extrabold mx-[60px] text-2xl">WANT TO WORK WITH US?</h1>
          
        </div>
        <div className="lg:py-[150px] py-[80px] lg:text-left lg:pl-[120px] text-center text-white bg-[#261818]">
          <h1 className="mb-10 font-bold lg:text-2xl">CONTACT US</h1>
          <p className="text-slate-300 pb-2 lg:text-[20px]">(+68) 120034509</p>
          <p className="text-slate-300 pb-2 lg:text-[20px]">info@yourdomain.com</p>
          <p className="text-slate-300 pb-2 lg:text-[20px]">
            005 Stokes Isle Apt. 896,
            <br />
            enaville 10010, USA
          </p>
        </div>
      </div>
      <div className="py-4 lg:py-[130px] lg:p-30 bg-black text-blue-100 lg:grid lg:grid-cols-4  md:justify-items-center">
        <div>
          <div className="mt-8 mb-5">
            <img
              className="hover:scale-110 duration-500"
              src={Logo}
              alt="logo"
              style={{ maxWidth: 60 }}
            />
          </div>
          <ul>
            <li>
              © Copyrights 2024 Outmedia
              <br /> All rights reserved
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="mt-8 mb-5 font-bold text-[17px]">USEFUL LINKS</li>
            <li>About</li>
            <li>Home</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="mt-8 mb-5 font-bold text-[17px]">Legal</li>
            <li>Terms & Conditions</li>
            <li>Private Policy</li>
            <li>Terms of Sales</li>
            <li>WhitePeper</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="mt-8 mb-5 font-bold text-[17px]">SUBSCRIPTION</li>
          </ul>
          <form>
            <input className="ml-4 p-1 text-black" type="email" />
            <input
              className="bg-white text-black  p-1 font-bold"
              type="submit"
            />
          </form>
          <ul className="flex pt-6">
            <li className="">
              <a
                className=""
                href="https://www.linkedin.com/in/jideobi-chebem-7aba10205"
              >
                <FaTwitter size={18} />
              </a>
            </li>

            <li className=" ">
              <a
                className=""
                href="https://www.linkedin.com/in/jideobi-chebem-7aba10205"
              >
                <FaFacebook size={20} />
              </a>
            </li>

            <li className=" ">
              <a
                className=""
                href="https://www.linkedin.com/in/jideobi-chebem-7aba10205"
              >
                <FaInstagram size={20} />
              </a>
            </li>

            <li className=" ">
              <a
                className=""
                href="https://www.linkedin.com/in/jideobi-chebem-7aba10205"
              >
                <FaLinkedin size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="p-6 bg-[#1c1616]">
        <p className="text-white text-center text-[12px] lg:text-1xl">
          © 2024, OUTMEDIA. All rights reserved
        </p>
      </div>
    </>
  );
}

export default Footer;
