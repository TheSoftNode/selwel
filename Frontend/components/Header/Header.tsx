"use client";

import React, { useEffect, useState } from "react";
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
        ? "bg-white shadow-lg dark:bg-accent"
        : "dark:bg-transparent bg-white"
        } sticky top-0 z-30 bg-white transition-all ${pathname === "/" && ""}`}
    >
      <div className="mx-auto">
        <div className="flex justify-between items-center">
          <Image
            src={"/logos/logo_3.png"}
            width={144}
            height={80}
            alt="selwel"
            className="w-36 h-20 pt-5 p-2 px-7"
          />
          <div className="flex p-4">
            {/* nav */}
            <Nav
              containerStyles="hidden md:flex gap-x-8 bg-white items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full bg-primary h-[2px] w-full"
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
