import React, { useRef } from "react";
import styled from "styled-components";
import { data } from "../data/data";
import { RxChevronLeft, RxChevronRight, RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const WorkCard = () => {
  const reversedData = [...data].reverse();
  const scrollerRefs = useRef({});

  const scrollImages = (id, direction) => {
    const scroller = scrollerRefs.current[id];
    if (!scroller) return;

    scroller.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <>
      {reversedData.map((data) => {
        const screenshots = data.images?.length ? data.images : [data.img];

        return (
          <div
            data-aos="zoom-in"
            key={data.id}
            className="flex flex-col justify-center items-center gap-4"
          >
            <POPUP className="img-content relative">
              <div
                ref={(element) => {
                  scrollerRefs.current[data.id] = element;
                }}
                className="h-[280px] w-[380px] transition duration-500 cursor-pointer shadow-xl rounded-md overflow-x-auto overflow-y-hidden sm:h-[260px] sm:w-[92%] sm:bg-cover mx-auto snap-x snap-mandatory scroll-smooth"
              >
                <div className="flex h-full w-full">
                  {screenshots.map((img, index) => (
                    <img
                      key={`${data.id}-${index}`}
                      src={img}
                      alt={`${data.title} screenshot ${index + 1}`}
                      className="min-w-full h-full object-contain bg-white snap-start"
                    />
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => scrollImages(data.id, "left")}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 border rounded-full p-2 shadow-md"
                aria-label="Previous screenshot"
              >
                <RxChevronLeft className="text-black w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={() => scrollImages(data.id, "right")}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 border rounded-full p-2 shadow-md"
                aria-label="Next screenshot"
              >
                <RxChevronRight className="text-black w-5 h-5" />
              </button>

              <div
                className={` popup w-full  h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] sm:w-[92%] p-4`}
              >
                <p className=" text-gray-900 text-base leading-[1.4] text-justify w-[90%]">
                  {data.desc}
                </p>
                <div className=" flex items-center justify-center gap-4">
                  <Link
                    to={data.link}
                    target="_blank"
                    className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <RxExternalLink className=" text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-black">Demo</p>
                  </Link>
                  <br className="w-[2px] bg-white" />
                  <Link
                    to={data.git}
                    target="_blank"
                    className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <AiOutlineGithub className="  text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-black">Code</p>
                  </Link>
                </div>
              </div>
            </POPUP>
            <p className="text-gray-800 text-xl font-medium sm:text-lg">
              {data.title}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default WorkCard;

const POPUP = styled.div`
  position: relative;
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`;
