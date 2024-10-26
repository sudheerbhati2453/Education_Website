import React, { useEffect, useRef } from "react";
import aboutImg from "../components/assets/images/about.jpg";
import aboutImgBanner from "../components/assets/images/about-banner.jpg";
import imgs from "../components/assets/images/join1.png";
import { FaGraduationCap } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import './About.css'

export const About = () => {
  return (
    <>
      <section className="about py-16">
        <div className="container">
          <div className="heading text-center py-12">
            <h1 className="text-3xl font-semibold text-black">
              Why An Scholercity Out Of The Ordinary
            </h1>
            <span className="text-sm mt-2 block">
              You don't have to struggle alone, you've got our assistance and help.
            </span>
          </div>
          {/* AboutCard Grid Section */}
          <div className="grid grid-cols-4 gap-5 mt-5 md:grid-cols-2">
            <AboutCard
              color="bg-[#69b3c2]"
              icon={<FaGraduationCap  size={50} />}
              title="4,000 Online courses"
              desc="You don't have to struggle alone, you've "
            />
            <AboutCard
              color="bg-[#efa7c2]"
              icon={<FaGraduationCap size={50} />}
              title="4,000 Online courses"
              desc="You don't have to struggle alone, you've "
            />
            <AboutCard
              color="bg-[#a878ec]"
              icon={<FaGraduationCap  size={50} />}
              title="4,000 Online courses"
              desc="You don't have to struggle alone, you've "
            />
            <AboutCard
              color="bg-[#8eef88]"
              icon={<FaGraduationCap  size={50} />}
              title="4,000 Online courses"
              desc="You don't have to struggle alone, you've "
            />
          </div>
        </div>
      </section>
      
      {/* About Content Section */}
      <AboutContent />
    </>
  );
};

// AboutCard component with scroll animation logic
export const AboutCard = (props) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const cardElement = cardRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => {
      if (cardElement) {
        observer.unobserve(cardElement);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`about-card box shadow-md p-5 py-8 rounded-md text-white hidden-card ${props.color} cursor-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300`}
    >
      <div className="icon">{props.icon}</div>
      <div className="text mt-5">
        <h4 className="text-lg font-semibold my-3">{props.title}</h4>
        <p className="text-sm">{props.desc}</p>
      </div>
    </div>
  );
};

// AboutContent component with bouncing images
export const AboutContent = () => {
  return (
    <section className="mb-16">
      <div className="container flex md:flex-col">
        <div className="left w-1/3 md:w-full mr-8 md:mr-0 relative">
          <img src={aboutImg} alt="aboutImg" className="rounded-xl bounce" />
          <img
            src={aboutImgBanner}
            alt="aboutImg"
            className="rounded-xl absolute -bottom-14 -left-24 h-56 md:left-80 bounce"
          />
          <div className="img-group ml-24 mt-3">
            <img src={imgs} alt="" className="bounce"/>
            <span className="text-[14px]">
              Join over <label className="text-black text-sm">4,000+</label> students
            </span>
          </div>
        </div>
        <div className="right w-2/3 md:w-full md:mt-16">
          <div className="heading w-4/5 md:w-full">
            <h1 className="text-3xl font-semibold text-black">
              Achieve Your Goals With TelusInstitute
            </h1>
            <span className="text-sm mt-2 block leading-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officia, reiciendis sapiente adipisci nulla non consequuntur eos repellendus laborum veritatis obcaecati neque est id porro voluptatum. Fuga iure nulla cum.
            </span>
            <ul className="my-5">
              <li className="text-sm flex items-center gap-5">
                <AiOutlineCheck className="text-green-500" /> Upskill your organization.
              </li>
              <li className="text-sm flex items-center gap-5 my-2">
                <AiOutlineCheck className="text-green-500" />
                Access more than 100K online courses
              </li>
              <li className="text-sm flex items-center gap-5">
                <AiOutlineCheck className="text-green-500" />
                Learn the latest skills
              </li>
            </ul>
            <button className="px-5 py-2 border border-gray-300 rounded-md text-sm">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
