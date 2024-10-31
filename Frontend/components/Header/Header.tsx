"use client";

import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { usePathname } from "next/navigation";
import ThemeToggler from "../Theme/ThemeToggler";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
// import { useAuth } from "../Auth/authProvider";

type Props = {};

const Header = (props: Props) =>
{
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  // const { isAuthenticated, userEmail, logout } = useAuth(); // Get authentication status and user email

  useEffect(() =>
  {
    const handleScroll = () =>
    {
      setHeader(window.scrollY > 80);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call the handleScroll function to set the initial state correctly
    handleScroll();

    // Clean up the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${header
        ? "bg-white shadow-lg dark:bg-accent py-1 px-4"
        : "dark:bg-transparent bg-white py-2 px-4"
        } sticky top-0 z-30 bg-white transition-all ${pathname === "/" && ""}`}
    >
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          <Image
            src={"/logos/logo-5.png"}
            width={144}
            height={100}
            alt="selwel"
            className="w-28 h-16 pt-2 p-2 px-7"
          />
          <div className="flex p-4">
            {/* nav */}
            <Nav
              containerStyles="hidden md:flex gap-x-8 bg-white items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full bg-sky-500 h-[2px] w-full"
            />
            {/* <ThemeToggler /> */}

            {/* Conditional rendering based on authentication */}
            {/* {isAuthenticated ? (
              <div className="flex items-center gap-x-4">
                <span className="font-bold">
                  {userEmail.substring(0, 4)} 
                </span>
                <button
                  onClick={logout}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg font-bold"
                >
                  Logout
                </button>
              </div> */}
            {/* ) : ( */}
              <Link
                href="/auth/login"
                className="px-6 p-2 md:ml-6 font-bold bg-lime-500 rounded-xl"
              >
                Login
              </Link>
            {/* )} */}

            {/* mobile nav */}
            <div className="ml-4 md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
