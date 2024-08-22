import Image from "next/image";
import { AiFillTwitterCircle } from "react-icons/ai";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaAmazon } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full px-4 lg:px-0 lg:w-[80%] mx-auto flex flex-col mt-20">
      <div className=" lg:flex justify-between items-center mb-3 lg:my-10">
        <div className="flex items-center justify-between">
          <h1 className="text-[32px] font-bold bg-black">
            <Image width={100} height={100} alt="#" src="/assets/logo.png" />
          </h1>
          <div className="flex lg:hidden justify-center items-center gap-6">
            <img src="/assets/logo-twitter 2.png" alt="" />

            <img src="/assets/2.png" alt="" />

            <img src="/assets/3.png" alt="" />

            <img src="/assets/4.png" alt="" />
          </div>
        </div>

        <div className="flex justify-between lg:justify-center items-center lg:gap-10 mt-2 lg:mt-0 ">
          <p>About</p>
          <p>News Feed</p>
          <p>Contact Us</p>
          <p>Support</p>
        </div>
        <div className="hidden lg:flex justify-center items-center gap-6 text-2xl">
          <CiFacebook />

          <AiFillTwitterCircle />

          <CiInstagram />

          <FaAmazon />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center lg:items-center-none mb-4 mt-1 lg:mt-0">
        <p className="lg:w-full">© Copyright 2024, All Rights Reserved</p>
        <div className="w-full flex justify-between lg:justify-end  items-center gap-6  ">
          <p>Privacy Policy </p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
