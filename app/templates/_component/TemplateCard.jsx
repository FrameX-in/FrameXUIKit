import Image from "next/image";


const TemplateCard = ({name,type,mode,image,author,sourceCode,tech}) => {
  return (
    <div className="md:w-[71rem] md:h-[20.5rem] w-[20.5rem] h-[40rem] p-4 rounded-2xl bg-white shadow-2xl flex flex-col ease-linear duration-300 md:flex-row-reverse m-3">
      <div className=" h-full w-full  shadow-md rounded-2xl basis-2/3 relative">
        <div className=" text-white z-10 bg-primary absolute pl-8 pr-8 pb-2 pt-2  rounded-tl-2xl rounded-br-2xl font-semibold">
          <h1>{mode}</h1>
        </div>
        <div className="h-full w-full relative border-2 border-white rounded-2xl">
          <Image
            src={image}
            alt="thumbnail"
            fill
            className=" rounded-2xl"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      <div className=" h-full w-full mr-2 rounded-2xl ">
        <p className="m-2 font-bold pl-1 text-lg text-primary " >{type}</p>
        <h1 className="m-2 text-4xl font-bold ">
          {name}
        </h1>
        <h4 className="m-2 text-gray-700"><b>Developer :</b> <span className="text-gray-500">{author}</span></h4>
        <div className=" pt-10 pr-2 pl-2 flex  flex-row  flex-wrap">
          
        {tech.map((stack) => (
      <div className="flex flex-row items-center m-1 text-xs bg-gray-200 rounded p-1 text-primary">
      {stack}
      </div>
    ))}
       
          
        </div>

        <div className="flex flex-row">
          <a  href={sourceCode} target="_blank" className="md:m-2 m-auto mt-8 bg-primary shadow-md shadow-[#bd7878]  pt-2 pb-2 pl-6 pr-4 rounded-xl flex flex-row justify-center items-center hover:bg-[#9a3c3c] ease-linear duration-300">
          {/* <FaGithub size={10} color="#fff" /> */}
            <h1 className="text-white text-md font-semibold pl-2">
              Soruce Code
            </h1>
          </a>
          
        </div>
      </div>
    </div>
  )
}

export default TemplateCard