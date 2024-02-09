// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { FaInstagram } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";

import Link from "next/link";

// import LogoVPN from "@/public/assets/Icon/Logo.svg";
// import Facebook from "@/public/assets/Icon/facebook.svg";
// import Twitter from "@/public/assets/Icon/twitter.svg";
// import Instagram from "@/public/assets/Icon/instagram.svg";
const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    

<footer className="border-t-2">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} <Link href="/" className="hover:text-primary">FrameX</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="hover:text-primary me-4 md:me-6">About</a>
        </li>
        <li>
            <a href="#" className="hover:text-primary me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="hover:text-primary me-4 md:me-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:text-primary">Contact</a>
        </li>
    </ul>
    </div>
</footer>

  );
};

export default Footer;
