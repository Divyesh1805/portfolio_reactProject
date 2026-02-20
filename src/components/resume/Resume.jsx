import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Experience
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className="flex flex-col gap-6">
            <div className=" relative">
              {/* design */}

              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg group border-2 border-yellow-400 rounded-lg p-3
            shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)]
           overflow-hidden
           transition-all duration-500 ease-in-out
          cursor-pointer

           w-[340px] hover:w-[380px]
           h-[150px] hover:h-[260px]

           mx-auto">
                <h1 className="text-[1.3rem] font-semibold">
                  Packaged App Development Analyst
                </h1>

                <span className="block text-[.9rem] font-semibold text-gray-500">
                  ACCENTURE, BANGALORE
                </span>

                <span className="block text-[.9rem] font-semibold text-yellow-500">
                  APRIL 2024 – Present
                </span>

                {/* DESCRIPTION */}
                <p
                  className="
                 mt-3 text-[.85rem] text-justify text-gray-500
                  opacity-0 translate-y-4
                 group-hover:opacity-100 group-hover:translate-y-0
                 transition-all duration-500 delay-100
                  "
                >
                  Worked as a full-stack developer, independently building scalable solutions for real-time user needs, maintaining multiple applications,
                  resolving numerous bugs, and quickly mastering new technologies to address critical security and vulnerability challenges.
                </p>
              </div>
            </div>
            <div className=" relative">
              {/* design */}

              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg group border-2 border-yellow-400 rounded-lg p-3
            shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)]
           overflow-hidden
           transition-all duration-500 ease-in-out
          cursor-pointer

           w-[340px] hover:w-[380px]
           h-[120px] hover:h-[220px]

           mx-auto">
                <h1 className="text-[1.3rem] font-semibold">
                  Programmer Analyst Trainee
                </h1>

                <span className="block text-[.9rem] font-semibold text-gray-500">
                  COGNIZANT, CHENNAI
                </span>

                <span className="block text-[.9rem] font-semibold text-yellow-500">
                  Sep 2023 – March 2024
                </span>

                {/* DESCRIPTION */}
                <p
                  className="
                 mt-3 text-[.85rem] text-justify text-gray-500
                  opacity-0 translate-y-4
                 group-hover:opacity-100 group-hover:translate-y-0
                 transition-all duration-500 delay-100
                  "
                >
                  Experienced in manual and Selenium-based automation testing with Java, specializing in test execution, defect tracking, and building reliable automation scripts.
                </p>
              </div>
            </div>
            <div className=" relative">
              {/* design */}

              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg group border-2 border-yellow-400 rounded-lg p-3
            shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)]
           overflow-hidden
           transition-all duration-500 ease-in-out
          cursor-pointer

           w-[340px] hover:w-[380px]
           h-[150px] hover:h-[260px]

           mx-auto">
                <h1 className="text-[1.3rem] font-semibold">
                  Full Stack Developer(MERN) Intern
                </h1>

                <span className="block text-[.9rem] font-semibold text-gray-500">
                  SAGAR SOLUTIONS, INDORE
                </span>

                <span className="block text-[.9rem] font-semibold text-yellow-500">
                  Feb 2023 – May 2023
                </span>

                {/* DESCRIPTION */}
                <p
                  className="
                 mt-3 text-[.85rem] text-justify text-gray-500
                  opacity-0 translate-y-4
                 group-hover:opacity-100 group-hover:translate-y-0
                 transition-all duration-500 delay-100
                  "
                >
                  My keen interest towards web development took me here. As an intern I designed
                  and developed various web applications as per client demands. Learned tools like
                  PostgreSQL, React Native, React Native, and Next.js for web and Android apps.
                </p>
              </div>
</div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.Tech
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Institute of Engineering and Technology, DAVV-Indore
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2019 - Year 2023
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                While pursuing my undergraduation in Mechanical field, I developed interest towards data analytics
                and web development. I have done courses and certification for Data Analytics - Tableau , Web Development- MERN Stack 
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
