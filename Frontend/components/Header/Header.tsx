"use client";

import React, { useEffect, useState } from "react";

//components
import Nav from "./Nav";
import { usePathname } from "next/navigation";
import ThemeToggler from "../Theme/ThemeToggler";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

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
        ? "bg-white shadow-lg dark:bg-accent "
        : "dark:bg-transparent"
        } sticky top-0 z-30 transition-all ${pathname === "/" && ""}`}
    >
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          <Image
            src={"/logos/logo1.jpeg"}
            width={144}
            height={80}
            alt="selwel"
            className="w-36 h-20 pt-5 p-2 px-7"
          />
          <div className="flex p-4">
            {/* nav */}
            <Nav
              containerStyles="hidden md:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary  transition-all"
              underlineStyles="absolute left-0 top-full bg-primary h-[2px]  w-full"
            />

            <ThemeToggler />

            <Link href={'auth/login'} className='px-6 p-2 md:ml-6 font-bold bg-lime-500 rounded-xl'>
              Login
            </Link>
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
