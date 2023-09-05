import React from "react";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import CountUp from 'react-countup';
import Tilt from 'react-parallax-tilt';
import VisibilitySensor from 'react-visibility-sensor';

export default function Rewards() {


  return (
    <div className=" z-10 rounded-b-[66px] rounded-t-[-166px]  flex flex-col items-center relative bg-gradient-to-b from-[#B6C6FF] to-[#e7d2f4]  py-3 pb-6 lg:py-10 lg:pb-28 px-16 ">

<div className="absolute min-w-7xl inset-0">
        <img
          className="object-cover rounded-b-[66px] w-full h-full opacity-10"
          src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
          alt=""
        />
      </div>{" "}
      <h2 className="font-body2 text-black text-center pb-3 sm:pb-12  text-3xl font-normal  sm:text-4xl lg:text-5xl">
        Rewards
      </h2>
      <Tilt gyroscope>
      <div className="  rounded-[30px] bg-[#ffffff1a] border-t-[1px] border-l-[1px] border-[#ffffff80] border-solid shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  font-body2  backdrop-blur-lg lg:py-24 py-10  lg:px-48 px-12  w-fit  ">
          <h1 className=" lg:text-5xl text-center font-100 z-100 drop-shadow-2xl text-2xl">Prize Worth</h1>
    
    <h1 className="lg:text-7xl text-center drop-shadow-2xl text-4xl  font-semibold" >
    <CountUp
start={0}
  end={100000}
  redraw={true}
  duration={2}
  separator=","
  decimal=","
prefix="₹">
{({ countUpRef,start }) => (
    <VisibilitySensor onChange={start} delayedCall>
    <span ref={countUpRef} />
</VisibilitySensor>
  )}
</CountUp>
    </h1>
   
          <div className="mt-7 lg:text-center text-xs lg:text-base ">
            <li className="pb-2">Internship opportunities for selected participants.</li>
            <li className="pb-2">Certificate of Participation for all teams upon reaching the Create phase.</li>
            <li className="pb-2">As per KTU regulations, socially relevant projects can avail upto 50 activity points.</li>
            <li >Exclusive perks for all the 30 shortlisted teams.</li>
          </div>
        </div>
        </Tilt>
      </div>

  );
}

