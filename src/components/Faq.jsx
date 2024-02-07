import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Teambg from "../assets/teambg.jpg";
import Ceo from "../assets/ceo.jpg";
import Team2 from "../assets/team-02.jpg";

function Faq() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

  const handleClick = () => setShow(!show);
  const handle1Click = () => setShow1(!show1);
  const handle2Click = () => setShow2(!show2);
  const handle3Click = () => setShow3(!show3);

  return (
    <div>
      <div
        className="py-16"
        style={{
          backgroundImage: `url(${Teambg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="text-center lg:py-10">
          <p className="text-orange-400 font-bold lg:pt-11 text-[11px]">
            MEET OUR EXPERT TEAM
          </p>
          <h1 className="text-white text-2xl lg:text-6xl pb-6 lg:py-4 font-extrabold">
            OUR TEAM
          </h1>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-2 justify-items-center items-center mx-2 ">
          <div className=" mx-4">
            <img className="lg:h-[500px] h-[400px]" src={Ceo} />
            <div className=" text-white text-center mb-10 p-6 hover:scale-110 duration-500">
              <h1>Bar. Kachi James</h1>
              <p>Ceo AI Movement</p>
            </div>
          </div>
 
        <div className=" mx-4 ">
          <img className="lg:h-[500px] h-[400px]" src={Team2} />
          <div className="text-white text-center mb-10 p-6 hover:scale-110 duration-500 ">
            <h1>Bar. Kachi James</h1>
            <p>Ceo AI Movement</p>
          </div>
        </div>

          <div className=" mx-4">
            <img className="lg:h-[500px] h-[400px]"  src={Ceo} />
            <div className="text-white text-center mb-10 p-6 hover:scale-110 duration-500 ">
              <h1>Bar. Kachi James</h1>
              <p>Ceo AI Movement</p>
            </div>
          </div>
        </div>
      </div>
      <div
        name="contact"
        className="bg-slate-300 lg:grid lg:grid-cols-2 lg:gap-3 mx-auto py-10 lg:py-0"
      >
        <div className="bg-white lg:mt-0 mt-[50px]  lg:mx-[100px] py-[110px] lg:pt-[100px] lg:pb-[500px]">
          <p className="lg:mx-[50px] mx-[10px] font-bold text-red-700 mb-4">
            FAQs
          </p>
          <h1 className="lg:mx-[50px] mx-[10px] lg:text-6xl font-black">
            MOST ASKED QUESTIONS
          </h1>
          <div className="lg:absolute">
            {/* FAQ1 */}
            <div className="lg:mx-[50px] mt-16">
              <div onClick={handleClick} className=" text-red-600">
                <div className="flex mx-[10px] text-[19px] font-bold ">
                  {!show ? <FaPlus /> : <FaMinus />}{" "}
                  <h2 className="-mt-1 ml-6 text-black">What is AIM</h2>
                </div>
                <div
                  className={
                    !show
                      ? "hidden"
                      : "  text-slate-900  justify-center items-center "
                  }
                >
                  <p className="py-2 lg:w-[40%] mx-4">
                    Start building your brand equity with the strategic one.
                    Creative has been focusing on project management. your brand
                    equity with the strategic one.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="lg:mx-[50px] mt-6">
              <div onClick={handle1Click} className=" text-red-600">
                <div className="flex mx-[10px] text-[19px] font-bold ">
                  {!show1 ? <FaPlus /> : <FaMinus />}{" "}
                  <h1 className="-mt-1 ml-6 text-black">Can I partner</h1>
                </div>
                <div
                  className={
                    !show1
                      ? "hidden"
                      : "  text-slate-900  justify-center items-center "
                  }
                >
                  <p className="py-2 lg:w-[40%] mx-4">
                    Start building your brand equity with the strategic one.
                    Creative has been focusing on project management. your brand
                    equity with the strategic one.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="lg:mx-[50px] mt-6">
              <div onClick={handle2Click} className=" text-red-600">
                <div className="flex mx-[10px] text-[19px] font-bold ">
                  {!show2 ? <FaPlus /> : <FaMinus />}{" "}
                  <h1 className="-mt-1 ml-6 text-black">When to purchase</h1>
                </div>
                <div
                  className={
                    !show2
                      ? "hidden"
                      : "  text-slate-900  justify-center items-center "
                  }
                >
                  <p className="py-2 lg:w-[40%] mx-4">
                    Start building your brand equity with the strategic one.
                    Creative has been focusing on project management. your brand
                    equity with the strategic one.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="lg:mx-[50px] mt-6">
              <div onClick={handle3Click} className=" text-red-600">
                <div className="flex mx-[10px] text-[19px] font-bold">
                  {!show3 ? <FaPlus /> : <FaMinus />}{" "}
                  <h1 className="-mt-1 ml-6 text-black">don't hesitate</h1>
                </div>
                <div
                  className={
                    !show3
                      ? "hidden"
                      : "  text-slate-900  justify-center items-center "
                  }
                >
                  <p className="py-2  lg:w-[40%] mx-4">
                    Startdjsdj building your brand equity with the strategic
                    one. Creative has been focusing on project management. your
                    brand equity with the strategic one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div
          name="contact"
          className="bg-red-600 my-[110px] lg:mx-[100px] py-11"
        >
          <form className="text-white">
            <h1 className="text-white my-1 mx-8 lg:mx-14 lg:text-4xl font-extrabold">
              REACH OUT VIA THE FORM BELOW
            </h1>

            <input
              className="border-b py-4 mx-8  lg:mx-14 bg-red-600 w-[80%]"
              type="text"
              placeholder="Full Name"
            />
            <br />
            <br className="hidden lg:block" />

            <input
              className="border-b py-4 mx-8  lg:mx-14 bg-red-600 w-[80%]"
              type="email"
              placeholder="Email"
            />
            <br />
            <br className="hidden lg:block" />

            <input
              className="border-b py-4 mx-8  lg:mx-14 bg-red-600 w-[80%]"
              type="email"
              placeholder="Telephone"
            />
            <br />
            <br className="hidden lg:block" />

            <input
              className="border-b py-4 mx-8  lg:mx-14 bg-red-600 w-[80%]"
              type="text"
              placeholder="phone"
            />
            <br />
            <br />
            <br />
            <input
              className="border font-bold text-1xl mx-8 lg:mx-14 py-6 px-14 hover:bg-white hover:text-red-600"
              type="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Faq;
