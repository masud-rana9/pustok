"use client";

import Link from "next/link";
import AppButton from "../ui/AppButton";
// import { useAppDispatch, useAppSelector } from "@/redux/hook";
// import {
//   logOut,
//   selectCurrentOrganizer,
//   selectCurrentUser,
// } from "@/redux/features/auth/authSlice";
// import ProfileDetailsPopUp from "../home/ProfileDetailsPopUp";
import { useEffect, useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { TbBrandBitbucket } from "react-icons/tb";
// import AvatarComponent from "../home/AvatarComponent";

const Navbar = () => {
  const pathname = usePathname();
  // const organizer = useAppSelector(selectCurrentOrganizer);
  // const user = useAppSelector(selectCurrentUser);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  // const dispatch = useAppDispatch();
  // console.log(user);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 500);
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setSticky(true);
    }
  }, [pathname]);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Books",
      link: "/books",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
    {
      name: "Register",
      link: "/auth/register",
    },
    {
      name: <TbBrandBitbucket />,
      link: "/order-and-pay/add-to-card",
    },
  ];

  // if (
  //   user?.role === "admin" ||
  //   user?.role === "superAdmin" ||
  //   organizer?.email
  // ) {
  //   navItems.push({
  //     name: "Dashboard",
  //     link: "/dashboard",
  //   });
  // }

  return (
    <div className="lg:fixed w-full z-50">
      <div
        className={`w-full transition-color px-4  mx-auto flex items-center justify-between lg:border lg:px-10 py-3  lg:rounded-full ${
          sticky
            ? " lg:rounded-none text-white lg:border-none fixed top-0 bg-primary w-full z-50 "
            : "bg-[#171717] lg:w-[80%] lg:mt-8 text-[#94A3B8]"
        }`}
      >
        <div>
          <Link href={"/"}>
            <Image
              className="object-cover w-full h-full"
              src={"/assets/logo.png"}
              width={40}
              height={40}
              alt="logo"
            />
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-white"
            onBlur={() => setTimeout(() => setIsMobileMenuOpen(false), 150)}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {/* {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />} */}
          </button>
        </div>
        <div className="hidden md:flex justify-center items-center gap-10 text-xl">
          {navItems.map((item) => (
            <Link key={item?.link} href={item?.link}>
              {item.name}
            </Link>
          ))}
        </div>
        {/* {organizer?.email || user?.email ? (
          <div className="hidden md:flex items-center gap-4">
            <ProfileDetailsPopUp />
          </div>
        ) : (
          <div className="hidden md:flex gap-4 cursor-pointer">
            <AppButton label="Signup" variant="noDesign" href="/auth/sign-up" />
            <AppButton label="Login" variant="outlined" href="/auth/sign-in" />
          </div>
        )} */}
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col text-white bg-[#171717] pl-8 w-full right-0 absolute pb-4">
          {/* {organizer?.email && (
            <div className="flex items-center gap-2 border-b border-b-[#EDF2F7] pb-2 pl-2 pt-2">
              <AvatarComponent organizer={organizer} />
              <div className="w-full">
                <h4 className="text-sm md:text-lg font-medium capitalize flex items-center gap-1">
                  {organizer?.name}
                </h4>
                <p className="textG">{organizer?.email}</p>
              </div>
            </div>
          )} */}
          {navItems.map((item) => (
            <Link key={item?.link} href={item?.link}>
              <div className="py-2 text-white">{item.name}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
