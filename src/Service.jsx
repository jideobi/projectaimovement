import React from "react";
import "./BackgroundSlider.css";
import Sml from "./assets/A-2.png";
import Sml2 from "./assets/advert1.jpeg";

const Service = () => {
  return (
    <div  className="mt-11">
      <div className="text-center">
        <p name="service" className="text-yellow-800 bold text-1xl md:text-2xl pb-4">
          what we do
        </p>
        <h1  className="font-extrabold text-2xl lg:text-6xl">OUR SERVICES</h1>
      </div>

      <div class="max-w-6xl  px-5 mx-auto mt-32 text-center">
        <div class="flex flex-col mt-24 md:flex-row  md:space-x-6">
          <div class="flex flex-col items-center mb-16 p-6 space-y-6 rounded lg bg-slate-200 md:w-1/3">
            <img src={Sml} class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold"> UI/X Designing</h5>
            <p class="text-5m text-darkGrayisBlue">
              "Murphy have suppercharged out team workflow. the ability to
              maintain visibility on larger miles at all times keeps everyone
              motivated"
            </p>
          </div>
          <div class="flex flex-col items-center mb-16 p-6 space-y-6 rounded  bg-slate-200 md:flex md:w-1/3">
            <img src={Sml} class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold"> Mobile App Development</h5>
            <p class="text-5m text-darkGrayisBlue">
              "Murphy have suppercharged out team workflow. the ability to
              maintain visibility on larger miles at all times keeps everyone
              motivated"
            </p>
          </div>
          <div class="flex flex-col items-center p-6 mb-16 space-y-6 rounded lg bg-slate-200 md:flex md:w-1/3">
            <img src={Sml} class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Web Development</h5>
            <p class="text-5m text-darkGrayisBlue">
              "Murphy have suppercharged out team workflow. the ability to
              maintain visibility on larger miles at all times keeps everyone
              motivated"
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[hsl(240,45%,15%)] lg:grid lg:grid-cols-2 ">
        <div className="p-20" style={{ backgroundImage: `url(${Sml2})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
          <h1 className=" bg-[hsl(32,45%,15%)]  text-center lg:ml-[17%] font-extrabold text-1xl lg:text-4xl mt-10 p-2 lg:p-8 text-[rgb(251,251,251)]">
            EXPERT OUT OF SOFTWARE AGENCY
          </h1>
        </div>

        <div class="pb-20">
          <div>
            <p className=" pt-16 mx-4 lg:py-[130px]  text-white lg:mx-[130px] font-bold lg:text-3xl justify-items-center text-center">
              Providing expert assistance with billboard advertising for 25
              years. quickly present you
            </p>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Service;
