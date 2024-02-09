"use client"
import React from "react";
import TemplateCard from "./_component/TemplateCard";
import ListTemplate from "../constant/ListTemplate";


const templates = () => {
  return (

    <>
    <div className="grid h-screen place-items-center ">
    

    {ListTemplate.map((card,idx) => (
      <TemplateCard
      key={idx}
       name ={card.name}
       type ={card.type}
       mode ={card.mode}
       image ={card.image}
       author ={card.author}
       sourceCode ={card.sourceCode}
       tech ={card.tech}
      />
    ))}
    </div>
    </>
  );
};

export default templates;
