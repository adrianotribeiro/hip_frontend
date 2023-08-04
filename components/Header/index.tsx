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
    <header className="t-header-responsivity flex h-20 items-center justify-between px-[5rem] pt-5 max-sm:px-[2.5rem]">
      <div className="min-md:border pt-3">
        <Image width={115} height={115} className="img-responsive" src="/images/brasao_logo_00.png" alt="logo" />
      </div>
      <div className="t-menu-responsivity flex items-center gap-4 max-sm:hidden">
        <Link className="border-[#ffd700] hover:border-b-2" href={"/"}>
          HOME
        </Link>
        <Link className="border-[#ffd700] hover:border-b-2" href={"/"}>
          CONSULTORIA
        </Link>
        <Link className="border-[#ffd700] hover:border-b-2" href={"/"}>
          AULAS
        </Link>
        <Link className="border-[#ffd700] hover:border-b-2" href={"/"}>
          SOBRE
        </Link>
        <Link className="border-[#ffd700] hover:border-b-2" href={"/"}>
          CONTATO
        </Link>
        <div className="flex items-center gap-6 pl-6">
          <Link href={"/"}>ENTRAR</Link>
          <Link className="rounded bg-white px-3 py-1 text-[1.125rem] text-[#32312B]" href={"/"}>
            CADASTRAR
          </Link>
        </div>
      </div>

      <animated.div
        className="absolute left-0 top-0 h-[60vh] w-full bg-white/5 backdrop-blur-sm md:hidden"
        style={{ transform }}
      >
        <ResponsiveNavbar />
      </animated.div>
      <div className="z-10 flex w-[50%] justify-end sm:hidden">
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
