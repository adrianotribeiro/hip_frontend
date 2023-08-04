import Image from "next/image"
import React from "react"
import KnowMore from "../KnowMore"
export default function HomeSection(): React.ReactElement {
  return (
    <section className="p-container py-12 md:h-fit lg:justify-between xl:flex xl:h-[90vh] xl:items-center xl:py-[0.20rem]">
      <div className="hidden xl:inline xl:overflow-hidden">
        <Image
          width={841}
          height={830}
          alt="Horse Image"
          className="r-img xl:w-[660px] 2xl:w-[1039px] min-[1920px]:w-[903px]"
          src="/images/principal_horse_image-fotor.png"
        />
      </div>
      <div className="xl:w-[50%] 2xl:w-[55%] 2xl:pr-3">
        <div className="content-container flex flex-col items-center justify-center gap-3 pb-8 xl:pb-4">
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
            <p className="princpal-colors home-title w-[92%] text-center text-[1.7rem] md:text-[2rem] lg:text-[2.5rem] xl:w-[100%] xl:text-[2rem] xl:leading-8 2xl:text-[3rem] 2xl:leading-10">
              Lorem Ipsum dolor sit amet, consectetur adispiscing elit.
            </p>
            <p className="st-r princpal-colors home-subtitle hidden md:flex md:pt-3 md:text-[1.3rem] lg:text-[1.7rem] xl:pt-0 xl:text-[1.3rem]">
              Lorem Ipsum dolor sit amet, consectetur adispiscing elit.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="content w-[80%] text-justify text-[1.3rem] tracking-tight text-white md:text-center md:text-[1.8rem] lg:text-[2rem] xl:w-[90%] xl:text-justify xl:text-[1.4rem]">
              Lorem ipsum dolor si t amet, consectetur adipiscing elit. Mauris fermentum, arcu fermentum semper
              efficitur, risus quam imperdiet neque, sit amet ullamcorper purus eros vitae nunc
            </p>
            <p className="content w-[80%] text-justify text-[1.3rem] tracking-tight text-white md:text-center md:text-[1.8rem]  lg:text-[2rem] xl:w-[90%] xl:text-justify xl:text-[1.4rem]">
              Lorem ipsum dolor si t amet, consectetur adipiscing elit. Mauris fermentum, arcu fermentum semper
              efficitur, risus quam imperdiet neque, sit amet ullamcorper purus eros vitae nunc
            </p>
          </div>
        </div>
        <div className="k-r flex flex-col items-center gap-5 px-8 xl:flex-row">
          <KnowMore link="#" />
          <KnowMore link="#" />
        </div>
      </div>
    </section>
  )
}
