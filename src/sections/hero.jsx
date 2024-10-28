import React from "react";
import BoyPicture from "../assets/boy.png";
import SocialsBanner from "../components/socials_banner";

function Hero() {
  return (
    <div className="relative py-[60px] section min-h-[656px]">
      <img
        src={BoyPicture}
        className="absolute top-0 right-0 w-[789px] h-[496px] my-[60px] mr-20 object-contain"
      />
      <div className="flex flex-col gap-[80px] relative z-10">
        <p className="text-5xl leading-5">
          Hello I'am <span className="font-extrabold">Akshay Balamurugan.</span>
        </p>
        <p className="text-5xl leading-5">
          <span className="font-extrabold">Full Stack Developer</span>
        </p>
        <div className="max-w-[750px]">
          <p className="text-justify text-base text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            nisi tempore neque laborum dolore, suscipit, ipsum sit qui, natus ut
            quasi. Modi labore dicta doloribus recusandae qui officia libero
            aperiam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            nisi tempore neque laborum dolore, suscipit, ipsum sit qui, natus ut
            quasi. Modi labore dicta doloribus recusandae qui officia libero
            aperiam?
          </p>
        </div>
      </div>
      <div className="absolute left-72 bottom-[68px]">
      <SocialsBanner />
      </div>
    </div>
  );
};

export default Hero;
