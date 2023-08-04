import Image from "next/image"
import React from "react"
import KnowMore from "../KnowMore"
export default function HomeSection(): React.ReactElement {
  return (
    <section className="p-container py-12 md:h-fit lg:justify-between xl:flex xl:h-[90vh] xl:items-center xl:py-[0.20rem] min-[1440px]:h-[91vh] min-[1680px]:h-fit min-[1920px]:h-[92.6vh]">
      <div className="hidden xl:inline">
        <Image
          width={841}
          height={830}
          alt="Horse Image"
          className="r-img xl:w-[660px] min-[1440px]:w-[737px] 2xl:w-[1039px] min-[1680px]:w-[871px] min-[1920px]:w-[903px]"
          src="/images/principal_horse_image-fotor.png"
        />
      </div>
      <div className="xl:w-[50%] min-[1440px]:w-[45%] min-[1680px]:mr-4 min-[1680px]:w-[40%] min-[1920px]:mr-16">
        <div className="content-container flex flex-col items-center justify-center gap-3 pb-8 xl:pb-4 min-[1440px]:pb-4">
          <div>
            <Image
              width={150}
              height={150}
              className="md:w-[250px] xl:w-[160px]"
              src="/images/brasao_logo_01.png"
              alt="Equestrianism Logo"
            />
          </div>
          <div className="flex flex-col items-center pb-4 xl:pb-0">
            <p className="princpal-colors t-r w-[92%] text-center text-[1.7rem] md:text-[2rem] lg:text-[2.5rem] xl:w-[100%] xl:text-[2rem] xl:leading-8">
              Lorem Ipsum dolor sit amet, consectetur adispiscing elit.
            </p>
            <p className="st-r princpal-colors hidden md:flex md:pt-3 md:text-[1.3rem] lg:text-[1.7rem] xl:pt-0 xl:text-[1.3rem]">
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
