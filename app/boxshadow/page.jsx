"use client"
import React from 'react'
import styled from 'styled-components';
import { BoxShadows } from "@/app/constant/BoxShadowCSS"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
const StyledCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    width: 150px;
    height: 150px;
    cursor: pointer;
    ${({ css }) => css};
    font-weight: 500;
    color: ${({ theme }) => theme.grey6};
    margin-bottom: 24px;
    margin-right: 72px;
    background: white;
    transition: border-radius 70ms cubic-bezier(0,0,.38,.9);
    :hover {
       border-radius: 100px;
    }
    @media (max-width: 900px) {
        margin-right: 24px;
    }
`

const BoxShadow = () => {
    const copyCss = (css) => () => {
        navigator.clipboard.writeText(css)
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
    }
    return (
        <>      
        
       
        <Header1/> 
                <Flex style={{ alignItems: "start" }}>
                    {BoxShadows.map((el, i) => (
                                    <StyledCard key={i} onClick={copyCss(el.css)} css={el.css} >Copy css</StyledCard>
                    ))}
                </Flex>
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
        </>
    )
}

const Header1 = ({ executeScroll }) => {
    return (
      <div className="mb-20 flex flex-col items-center justify-center w-full">
        <h1 className="font-bold text-xl md:text-3xl tracking-normal mb-4 text-black dark:text-white mx-auto my-20">
          Color Palettes
        </h1>
        <h2 className="prose text-gray-700 font-normal dark:text-gray-400  text-center mx-auto">
          A curated list of Box Shadow for better  Box UI theme.
        </h2>
        <p className="prose text-gray-700 font-normal dark:text-gray-400  text-center mx-auto">
          <span className="bg-gray-800 border border-gray-100 rounded-md px-1 py-1">
            🖱
          </span>{" "}
          click to copy Box Shadow code & press{" "}
          <span className="bg-gray-50 rounded-md border border-gray-100 px-2 py-1">
            ⌘+D
          </span>{" "}
          to bookmark this page.
        </p>{" "}
      </div>
    );
  };

export default BoxShadow