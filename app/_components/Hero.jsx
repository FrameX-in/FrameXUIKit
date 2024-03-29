import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineTemplate } from "react-icons/hi";
import { BsBorderOuter } from "react-icons/bs";
import { IoIosColorPalette } from "react-icons/io";

const Hero = ({
  listUser = [
    {
      name: "Border Box",
      number: "20",
      icon: BsBorderOuter,
    },
    {
      name: "Color Palette",
      number: "25",
      icon: IoIosColorPalette,
    },
    {
      name: "Templates",
      number: "25",
      icon: HiOutlineTemplate,
    },
    
    
  ],
}) => {

  return (
    <div className="max-w-screen-xl mt-16 px-8 xl:px-16 mx-auto" id="about">
      {/* <ScrollAnimationWrapper> */}
        <div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Free Frontend assets and templates from <strong className="text-primary">FrameX</strong>.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Provide a 50+ Color Palettes and Templates for all your needs for Frontend and learn with
              FrameX discover interesting features from us.
            </p>
           <Link href="/templates" className="block rounded-md bg-primary px-7 py-3 text-sm font-medium text-white transition  hover:bg-red-700">Get Template</Link>
          </div>
          <div className="flex w-full">
            <div className="h-full w-full" >
              <Image
                src="/assets/Illustration1.png"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      {/* </ScrollAnimationWrapper> */}
      <div className="relative w-full flex">
        <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{ duration: 2 + index }}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <listUsers.icon/>
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    {listUsers.number}+
                  </p>
                  <p className="text-lg text-black-500">{listUsers.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
