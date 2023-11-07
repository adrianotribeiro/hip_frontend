"use client"
import { animated, useSpring } from "@react-spring/web"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import ResponsiveNavbar from "../ResponsiveNavbar"
export default function Header(): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const genericHamburgerLine = `h-1 w-9 my-1 rounded-full bg-[#ffd700] transition ease transform duration-300 `

  const { transform } = useSpring({
    transform: isOpen ? "translateY(0rem)" : "translateY(-60rem)",
  })

  return (
    <header className="t-header-responsivity max-sm:px-[2.5rem] flex h-20 items-center justify-between px-[2rem] pt-5">
      <div className="pt-3">
        <Image
          width={115}
          height={115}
          className="img-responsive xl:hidden"
          src="/images/brasao_logo_00.png"
          alt="logo"
        />
      </div>
      <div className="t-menu-responsivity hidden lg:flex lg:items-center lg:gap-4 xl:pt-5 3xl:gap-32 4xl:gap-56">
        <div className="md:flex md:items-center md:gap-4">
          <Link className="border-[#ffd700] hover:border-b-2 xl:text-[1.2rem]" href={"/"}>
            HOME
          </Link>
          <Link className="border-[#ffd700] hover:border-b-2 xl:text-[1.2rem]" href={"/"}>
            CONSULTORIA
          </Link>
          <Link className="border-[#ffd700] hover:border-b-2 xl:text-[1.2rem]" href={"/"}>
            AULAS
          </Link>
          <Link className="border-[#ffd700] hover:border-b-2 xl:text-[1.2rem]" href={"/"}>
            SOBRE
          </Link>
          <Link className="border-[#ffd700] hover:border-b-2 xl:text-[1.2rem]" href={"/"}>
            CONTATO
          </Link>
        </div>
        <div className="flex items-center gap-6 pl-6 ">
          <Link href={"/"} className="xl:text-[1.2rem]">
            ENTRAR
          </Link>
          <Link className="rounded bg-white px-3 py-1 text-[1.125rem] text-[#32312B]" href={"/"}>
            CADASTRAR
          </Link>
        </div>
      </div>

      <animated.div
        className="absolute left-0 top-0 h-[60vh] w-full bg-white/5 backdrop-blur-sm lg:hidden"
        style={{ transform }}
      >
        <ResponsiveNavbar />
      </animated.div>
      <div className="z-10 flex w-[50%] justify-end lg:hidden">
        <button
          className="group flex  h-12 w-12 flex-col items-center justify-center rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "translate-y-3 rotate-45 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          ></div>
          <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </button>
      </div>
    </header>
  )
}
