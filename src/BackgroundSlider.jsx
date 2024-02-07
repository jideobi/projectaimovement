import { useEffect, useState } from "react";
import "./BackgroundSlider.css";
import CountUp from "react-countup";
import imageSlide from "./data";

function BackgroundSlider() {
  const [currentState, setCurrentState] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 2) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
    return () => setTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    BackgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };

  const goToNext = (currentState) => {
    setCurrentState(currentState);
  };
  return (
    <div name="home" className="w-[100%] ">
      <div className="md:pb-[90px]" style={bgImageStyle}>
        <div className="pl-[8%]  pb-10 text-white pt-[300px] md:pl-[11%]">
          <div className="">
            <div className="md:text-7xl md:max-w-[500px] text-2xl lg:text-5x">
              <h1 className="font-extrabold">
                {imageSlide[currentState].title}
              </h1>
            </div>
            <div>
              <h6 className=" border-2 mt-11 bg-red-600 border-red-600 py-[18px] px-4 md:w-[160px]    w-[150px]   font-bold ">
                {imageSlide[currentState].body}
              </h6>
            </div>
          </div>

          <div className="carousel-boult">
            {imageSlide.map((imageSlide, currentState) => (
              <span
                key={currentState}
                onClick={() => goToNext(currentState)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 md:grid md:grid-cols-2 md:gap-2 mb-[100px] lg:p-[100px] bg-white lg:mx-[180px] text-black lg:mt-[-70px] border-b border-green-200  p-4">
        <div>
          <h1 className="text-1xl md:text-3xl font-extrabold">
            WE CREATE MASS 
            PUBLIC'S EYE <br />
            <span className="text-red-600">ATTENTION</span>
          </h1>
          <p className="mt-10 border-b-4 border-red-500 w-[120px]">
            WHO WE ARE
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <div>
            <p>
              We are a value-driven organization. Our core values inspire us to
              push our boundaries and set benchmarks for others push our
              boundaries.
            </p>
          </div>
          <div className="mt-10 md:grid md:grid-cols-3 md:gap-2 md:text-center">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-red-600">
              <CountUp
              start={0}
              end={245}
              duration={25.75}>
              </CountUp>+</h1>
              <p>complete project</p>
            </div>
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-red-600">
              <CountUp
              start={0}
              end={80}
              duration={35.75}>
              </CountUp>%</h1>
              <p>success rate</p>
            </div>
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-red-600">
              <CountUp
              start={0}
              end={46}
              duration={35.75}>
              </CountUp>
              +</h1>
              <p>country covered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundSlider;
