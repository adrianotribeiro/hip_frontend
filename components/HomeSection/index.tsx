import Image from "next/image"
import React from "react"
import KnowMore from "../KnowMore"
export default function HomeSection(): React.ReactElement {
  return (
    <section className="py-12 md:h-fit lg:justify-between xl:flex xl:h-[90vh] xl:items-center xl:justify-end xl:py-[0.20rem] h-xl:h-[91.6vh] sm-2xl:h-[89.6vh] lg-xl:h-[91.1vh] 3xl:h-[92.4vh] 4xl:h-fit">
      <div className="hidden xl:absolute xl:left-0 xl:inline h-xl:-ml-36 3xl:ml-[-8rem] 4xl:relative 4xl:ml-0">
        <Image
          width={650}
          height={830}
          alt="Horse Image"
          className="h-xl:w-[785px] sm-2xl:w-[621px] lg-xl:w-[741px] 3xl:w-[875px] 4xl:w-[938px]"
          src="/images/principal_horse_image-fotor.png"
        />
      </div>
      <div className="xl:w-[50%] 2xl:w-[55%] 2xl:pr-3">
        <div className="flex flex-col items-center justify-center gap-3 pb-8 xl:pb-4 sm-2xl:pb-2 lg-xl:p-2">
          <div className="">
            <Image
              width={150}
              height={150}
              className="md:w-[250px] xl:w-[160px]"
              src="/images/brasao_logo_01.png"
              alt="Equestrianism Logo"
            />
          </div>
          <div className="flex flex-col items-center pb-4 xl:pb-0">
            <p className="princpal-colors w-[92%] text-center text-[1.7rem] md:text-[2rem] lg:text-[2.5rem] xl:w-[100%] xl:text-[2rem] xl:leading-8 2xl:text-[3rem] 2xl:leading-10 lg-xl:w-[80%] lg-xl:text-[2.25rem] 3xl:w-[100%]">
              Lorem Ipsum dolor sit amet, consectetur adispiscing elit.
            </p>
            <p className="st-r princpal-colors hidden md:flex md:pt-3 md:text-[1.3rem] lg:text-[1.7rem] xl:pt-0 xl:text-[1.3rem] 3xl:text-[1.8rem]">
              Lorem Ipsum dolor sit amet, consectetur adispiscing elit.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="w-[80%] text-justify text-[1.3rem] tracking-tight text-white md:text-center md:text-[1.8rem] lg:text-[2rem] xl:w-[90%] xl:text-justify xl:text-[1.4rem] 3xl:text-[2rem]">
              Lorem ipsum dolor si t amet, consectetur adipiscing elit. Mauris fermentum, arcu fermentum semper
              efficitur, risus quam imperdiet neque, sit amet ullamcorper purus eros vitae nunc
            </p>
            <p className="w-[80%] text-justify text-[1.3rem] tracking-tight text-white md:text-center md:text-[1.8rem] lg:text-[2rem]  xl:w-[90%] xl:text-justify xl:text-[1.4rem] 3xl:text-[2rem]">
              Lorem ipsum dolor si t amet, consectetur adipiscing elit. Mauris fermentum, arcu fermentum semper
              efficitur, risus quam imperdiet neque, sit amet ullamcorper purus eros vitae nunc
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 px-8 xl:flex-row sm-2xl:py-0 lg-xl:gap-4 lg-xl:px-[2.5rem] 3xl:px-11 3xl:py-4 4xl:px-12">
          <KnowMore link="#" />
          <KnowMore link="#" />
        </div>
      </div>
    </section>
  )
}
