import { Fira_Sans } from "next/font/google"
import Link from "next/link"
import React from "react"
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai"
const FiraSams = Fira_Sans({
  subsets: ["latin"],
  weight: "400",
})

export default function Footer(): React.ReactElement {
  return (
    <section className="flex flex-col items-center gap-3 bg-[#423934] px-3 py-8 xl:flex-row xl:justify-around ">
      <div className="">
        <p className={`${FiraSams.className} text-center text-[1.2rem] 4xl:text-[1.8rem]`}>
          © 2023 Lorem Ipsum - Desenvolvido por{" "}
          <Link href={"#"} className="hover:text-[white]">
            Nissian Software
          </Link>
        </p>
      </div>
      <div className="flex gap-3">
        <Link href={"https://www.facebook.com/"}>
          <AiFillFacebook className="h-fit w-[50px]" />
        </Link>
        <Link href={"https://www.instagram.com/"}>
          <AiFillInstagram className="h-fit w-[50px]" />
        </Link>
        <Link href={"https://twitter.com/"}>
          <AiFillTwitterSquare className="h-fit w-[50px]" />
        </Link>
      </div>
    </section>
  )
}
