import React from "react";
import heroImg from "../components/assets/images/hero.png";
import heroImgback from "../components/assets/images/hero-shape-purple.png";
import { FiSearch } from "react-icons/fi";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaBookReader, FaGraduationCap, FaUsers } from "react-icons/fa";
import { About } from "./About";
import { Courses } from "./Courses";
import { Instructor } from "./Instructor";
import { Blog } from "./Blog";
import Testimonials from "./Testimonial/Testimonials";
import Fade from "react-reveal/Fade";

export const Home = () => {
  return (
    <>
      <Fade bottom>
        <HomeContent />
      </Fade>

      <Fade bottom>
        <About />
      </Fade>

      <Fade bottom>
        <Courses />
      </Fade>

      <Fade bottom>
        <Instructor />
      </Fade>

      <Fade bottom>
        <Blog />
      </Fade>

      <Fade bottom>
        <Testimonials />
      </Fade>
    </>
  );
};

export const HomeContent = () => {
  return (
    <>
      <section className="bg-custom py-10 h-[92vh] md:h-full">
        <div className="container">
          <div className="flex items-center justify-center md:flex-col">
            <Fade left>
              <div className="left w-1/2 text-black md:w-full">
                <h1 className="text-4xl leading-tight text-black font-semibold">
                  Embark on <br /> Your Educational <br /> Adventure
                </h1>
                <h3 className="text-lg mt-3">Unlimited access to all courses</h3>

                <div className="relative text-gray-600 focus-within:text-gray-400 mt-5">
                  <input
                    type="search"
                    className="py-3 text-sm bg-white rounded-md pl-10 focus:outline-none"
                    placeholder="Search..."
                    autoComplete="off"
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button
                      type="submit"
                      className="p-1 focus:outline-none focus:shadow-outline"
                    >
                      <FiSearch />
                    </button>
                  </span>
                </div>
                <span className="text-[14px]">
                  You're guaranteed to find something that's right for you.
                </span>
              </div>
            </Fade>

            <Fade right>
              <div className="right w-1/2 md:w-full relative">
                <div className="images relative">
                  <img
                    src={heroImgback}
                    alt=""
                    className="absolute top-32 left-10 w-96 md:left-10"
                  />
                  <div className="img h-[85vh] w-full">
                    <img
                      src={heroImg}
                      alt=""
                      className="h-full w-full object-contain z-20 relative"
                    />
                  </div>
                </div>
                <div className="content">
                  <button className="bg-white shadow-md absolute top-28 -left-20 z-30 p-2 flex items-center rounded-md">
                    <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-orange-500 ">
                      <BsFillLightningChargeFill size={25} />
                    </div>
                    <div className="text flex flex-col items-start px-4">
                      <span className="text-sm text-black">Congratulations</span>
                      <span className="text-[12px]">Your admission completed</span>
                    </div>
                  </button>

                  <button className="bg-white shadow-md absolute bottom-32 left-48 z-30 p-2 flex items-center rounded-md pr-8">
                    <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-blue-400">
                      <FaGraduationCap size={25} />
                    </div>
                    <div className="text flex flex-col items-start px-4">
                      <span className="text-sm text-black">450K</span>
                      <span className="text-[12px]">Assisted Student</span>
                    </div>
                  </button>

                  <button className="bg-white shadow-md absolute top-56 -right-32 z-30 p-2 md:top-96 md:-right-5 flex items-center rounded-md">
                    <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-orange-400">
                      <FaUsers size={25} />
                    </div>
                    <div className="text flex flex-col items-start px-4">
                      <span className="text-sm text-black">User Experience Class</span>
                      <span className="text-[12px]">Tomorrow is a blank page. Write your story</span>
                    </div>
                  </button>

                  <button className="bg-white shadow-md absolute top-32 right-[-120px] z-30 p-2 flex items-center rounded-md">
                  <div className="icon w-10 h-10 text-white rounded-full flex items-center justify-center bg-indigo-400">
                      <FaBookReader size={25} />
                    </div>
                    <div className="text flex flex-col items-start px-2">
                      {/* <span className="text-sm text-black">User Experience Class</span> */}
                      <span className="text-black text-[12px]">
                      New day, New opportunities
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};
