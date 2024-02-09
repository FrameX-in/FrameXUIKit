'use client';

import "./css/colorBox.css"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const ColorBox = ({Palette}) => {
  const onClickColor = (text) => {
    var textArea = document.createElement("textarea");
    textArea.value = text;
  
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("Fallback: Copying text command was " + msg);
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
    }
    document.body.removeChild(textArea);
    
    toast.success('Copied!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };
  
  return (

    <>
      <div className="container ">
        <div className="palette">
         <div onClick={() => {
           onClickColor(Palette[0]);
          }} className="color" style={{background : Palette[0]}}><span className="cursor-pointer">{Palette[0]}</span></div>
         <div onClick={() => {
           onClickColor(Palette[1]);
          }} className="color" style={{background : Palette[1]}}><span className="cursor-pointer">{Palette[1]}</span></div>
         <div onClick={() => {
           onClickColor(Palette[2]);
          }} className="color" style={{background : Palette[2]}}><span className="cursor-pointer">{Palette[2]}</span></div>
         <div onClick={() => {
           onClickColor(Palette[3]);
          }} className="color" style={{background : Palette[3]}}><span className="cursor-pointer">{Palette[3]}</span></div>
         <div onClick={() => {
           onClickColor(Palette[4]);
          }} className="color" style={{background : Palette[4]}}><span className="cursor-pointer">{Palette[4]}</span></div>
        
        
         
        </div>
        <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                    theme="light"
                    />
    </div>
   
          </>
  )
}









export default ColorBox