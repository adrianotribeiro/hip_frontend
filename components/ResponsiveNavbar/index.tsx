import Link from "next/link"
import React from "react"

export default function ResponsiveNavbar(): React.ReactElement {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
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
      <div className="flex flex-col items-center justify-center gap-6 ">
        <Link href={"/"}>ENTRAR</Link>
        <Link className="rounded bg-white px-3 py-1 text-[1.125rem] text-[#32312B]" href={"/"}>
          CADASTRAR
        </Link>
      </div>
    </div>
  )
}
