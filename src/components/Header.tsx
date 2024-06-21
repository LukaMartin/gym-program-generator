"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";

const routes = [
  {
    id: "0",
    path: "/",
    name: "Program Generator",
  },
  {
    id: "1",
    path: "/exercise-instructions",
    name: "Exercise Instructions",
  },
];

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  const activePathname = usePathname();
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <>
      <header className="h-20 px-4 md:px-8 mb-20 border-b border-white/20 ">
        <nav className="h-full hidden md:flex justify-between items-center">
          <Link href="/">
            <h2
              className={`${poppins.className} text-light-red text-2xl lg:text-3xl font-bold`}
            >
              GYM PROGRAM GEN
            </h2>
          </Link>
          <ul className="flex gap-x-4 md:gap-x-8 h-full">
            {routes.map((route) => {
              return (
                <li
                  key={route.id}
                  className={clsx(
                    "hover:text-white text-sm md:text-base flex items-center transition relative",
                    {
                      "text-white": route.path === activePathname,
                      "text-white/70": route.path !== activePathname,
                    }
                  )}
                >
                  <Link href={route.path}>{route.name}</Link>

                  {activePathname === route.path && (
                    <motion.div
                      layoutId="header-active-link"
                      className="bg-light-red h-1 w-full rounded-lg absolute bottom-0"
                    ></motion.div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="h-full flex md:hidden items-center justify-between">
          <Link href="/">
            <h2
              className={`${poppins.className} text-light-red text-xl font-bold`}
            >
              GYM PROGRAM GEN
            </h2>
          </Link>
          {toggleMenu && (
            <IoMenu size={30} onClick={() => setToggleMenu(!toggleMenu)} />
          )}
        </div>

        <section
          className={
            !toggleMenu
              ? "fixed top-0 left-0 bg-light-red text-white h-full w-screen ease-in-out duration-700 md:hidden"
              : "fixed overflow-hidden z-10 inset-0 delay-200 duration-700 opacity-0 translate-x-full"
          }
        >
          <div className="h-20 flex md:hidden items-center justify-between px-4 border-b border-white/20">
            <Link href="/">
              <h2 className={`${poppins.className} text-xl font-bold`}>
                GYM PROGRAM GEN
              </h2>
            </Link>
            {!toggleMenu && (
              <IoClose size={30} onClick={() => setToggleMenu(!toggleMenu)} />
            )}
          </div>
          <nav className="pt-10 pl-4">
            <ul>
              {routes.map((route) => {
                return (
                  <li
                    key={route.id}
                    onClick={() => setToggleMenu(true)}
                    className={clsx(
                      "text-lg border-b-2 border-white/75 py-4 max-w-[50%]",
                      {
                        "text-white": route.path === activePathname,
                        "text-white/70": route.path !== activePathname,
                      }
                    )}
                  >
                    <Link href={route.path}>{route.name}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </section>
      </header>
    </>
  );
}
