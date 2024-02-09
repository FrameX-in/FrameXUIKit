import React from "react";
// import Header from "../Components/Header";
// import ColorPaletteBox from "../Components/ColorPaletteBox";
import ColorPalettes from "@/app/constant/ColorPalettes";
import ColorBox from "./_components/ColorBox";

const colorPicks = () => {
  return (
    <>
    <Header1 />
 <div className=" px-10 py-7 grid grid-flow-row gap-24 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
{ColorPalettes.map((card) => (
  <ColorBox
    key={`${card.sr}`}
    Palette={card.Palettes}
  />
))}

</div>
  </>
 
 );
};

const Header1 = ({ executeScroll }) => {
  return (
    <div className="mb-20 flex flex-col items-center justify-center w-full">
      <h1 className="font-bold text-xl md:text-3xl tracking-normal mb-4 text-black dark:text-white mx-auto my-20">
        Color Palettes
      </h1>
      <h2 className="prose text-gray-700 font-normal dark:text-gray-400  text-center mx-auto">
        A curated list of Color Palettes for better UI theme.
      </h2>
      <p className="prose text-gray-700 font-normal dark:text-gray-400  text-center mx-auto">
        <span className="bg-gray-800 border border-gray-100 rounded-md px-1 py-1">
          🖱
        </span>{" "}
        click to copy color code & press{" "}
        <span className="bg-gray-50 rounded-md border border-gray-100 px-2 py-1">
          ⌘+D
        </span>{" "}
        to bookmark this page.
      </p>{" "}
    </div>
  );
};

export default colorPicks;
