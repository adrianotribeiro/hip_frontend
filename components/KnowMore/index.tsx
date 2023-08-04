"use client"
import React from "react"
interface KnowMoreProps {
  link: string
}

export default function KnowMore({ link }: KnowMoreProps): React.ReactElement {
  return (
    <div className="flex flex-col items-center lg-xl:pt-4 3xl:gap-3">
      <div className="3xl:flex 3xl:flex-col 3xl:gap-1">
        <p className="kt-r princpal-colors princpal-colors text-center text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] xl:text-left xl:text-[1.5rem] 3xl:text-[2rem]">
          Lorem Ipsum
        </p>
        <p className="kst-r text-center text-[1.4rem] text-white md:px-12 md:text-center md:text-[1.8rem] lg:px-[15vw] lg:text-[2rem] xl:p-0 xl:text-justify xl:text-[1.2rem]  xl:leading-6 xl:tracking-tight lg-xl:tracking-wider sm-2xl:p-0 sm-2xl:text-[1.4rem] sm-2xl:leading-[1.5rem] sm-2xl:tracking-wider 3xl:text-[1.7rem] 3xl:leading-7 3xl:tracking-wider 4xl:text-[1.7rem] 4xl:tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipiscing eli, mauris fermentum.
        </p>
      </div>
      <div className="flex w-full justify-center pt-4 lg:pt-8 xl:justify-start xl:pt-3 lg-xl:pt-4 sm-2xl:justify-start sm-2xl:pt-[0.8rem]">
        <button
          onClick={() => console.log(link)}
          className="w-[70%] rounded bg-white py-1 text-[1.5rem] text-[#32312B] md:w-[40%] xl:w-[60%] xl:py-[0.10rem] xl:text-[1rem] hover:xl:bg-[#b6b4b4] hover:xl:text-[white] lg-xl:px-4 lg-xl:text-[1.3rem] 3xl:text-[1.4rem]"
        >
          Lorem Ipsuma
        </button>
      </div>
    </div>
  )
}
