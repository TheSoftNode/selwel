"use client";

import React, { useEffect, useState } from "react";

//components
import Nav from "./Nav";
import { usePathname } from "next/navigation";
import ThemeToggler from "../Theme/ThemeToggler";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Header = (props: Props) =>
{
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() =>
  {
    const scrollYPos: any = window.addEventListener("scroll", () =>
    {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener("scroll", scrollYPos);
  });

  return (
    <header
      className={`${header
        ? " bg-white shadow-lg "
        : ""
        } sticky top-0 z-30 transition-all ${pathname === "/" && "#fff"}`}
    >
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          <Image
            src={"/logos/logo1.jpeg"}
            width={60}
            height={50}
            alt="selwel"
            className="w-36 h-20 pt-5 p-2 px-7"
          />
          <div className="flex p-4 m-4">
            {/* nav */}
            <Nav
              containerStyles="hidden md:flex gap-x-8 items-center"
              linkStyles="relative  transition-all"
              underlineStyles="absolute left-0 top-full h-[2px]  w-full"
            />

            <ThemeToggler />

            <Link href={'/login'} className='px-6 p-2 ml-6 font-bold bg-lime-500 rounded-xl'>
              Login
            </Link>
            {/* mobile nav */}
            <div className="lg:hidden">
              {/* <MobileNav /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
