import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-yellow-400 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 
        data-aos="zoom-out"
         className=" font-bold text-5xl sm:text-3xl">Reach Out To</h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
        
          <a 
          data-aos="fade-up" data-aos-duration="1200"

            href="https://wa.me/919479482107?text=Hi%20Divyesh%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noreferrer"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1400"

            href="https://www.linkedin.com/in/divyesh-gangwal-96572a1a1/"
            target="_blank"
            rel="noreferrer"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <FaLinkedinIn className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>LinkedIn</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1600"
            href="https://github.com/Divyesh1805"
            target="_blank"
            rel="noreferrer"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <FaGithub className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>GitHub</p>
          </a>
        </div>
        <div className="sm:text-[12px]">
          | divyeshgangwal@gmail.com | +91 9479482107 
          <a href="#"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
