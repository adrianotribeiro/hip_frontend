"use client"
import dynamic from "next/dynamic"
import Image from "next/image"
import React from "react"

export default function Consulting(): React.ReactElement {
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

  return (
    <section className="md:bg-top xl:relative xl:overflow-hidden">
      <div className="hidden xl:absolute xl:right-0 xl:top-0 xl:-mr-20 xl:inline h-xl:mr-[-10rem] 3xl:mr-[-10rem]">
        <Image
          width={760}
          height={300}
          className="h-xl:w-[790px] lg-xl:w-[820px] sm-2xl:w-[785px] 3xl:w-[900px] 4xl:w-[1003px]"
          src="/images/horse_rider_01_bg_fotor.png"
          alt="horse rider"
        />
      </div>
      <div className="py-7 md:py-10 4xl:pl-24">
        <div className="flex flex-col gap-4 md:items-center xl:w-[60%] xl:items-start">
          <p className="px-5 text-center text-[1.8rem] leading-7 md:w-full md:text-[2.25rem] md:leading-tight lg:w-full lg:text-center lg:text-[3rem] xl:text-left">
            Lorem Ipsum dolor sit amet, consectetur adispiscing elit.
          </p>
          <p className="text-center text-[1.3rem] text-white md:px-[1.5rem] md:text-[1.8rem] lg:px-24 xl:w-[85%] xl:pl-[1.5rem] xl:text-left xl:text-[1.9rem] xl:leading-9 lg-xl:text-[2.2rem] 3xl:text-[2.5rem] 3xl:leading-[3rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum, arcu fermentum semper efficitur,
            risus quam imperdiet neque, sit amet ullamcorper purus eros vitae nunc
          </p>
          <p className="text-center text-[1.3rem] text-white md:px-[1.5rem] md:text-[1.8rem] lg:px-24 xl:w-[85%] xl:pl-[1.5rem] xl:text-left xl:text-[1.9rem] xl:leading-9 lg-xl:text-[2.2rem] 3xl:text-[2.5rem] 3xl:leading-[3rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum, arcu fermentum semper efficitur,
            risus quam imperdiet neque, sit amet ullamcorper purus eros vitae nunc
          </p>
          <div className="flex items-center justify-center pt-3 md:w-full xl:justify-start xl:pl-6">
            <button className="w-[80%] rounded bg-white py-1 text-[#32312B] md:w-[50%] md:py-2 md:text-[1.5rem] lg:py-3 xl:py-1">
              {" "}
              LOREM IPSUM
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 bg-[#423934] py-4 md:gap-6 md:py-8 xl:items-start xl:pl-6 4xl:pl-24">
        <ReactPlayer
          className="react-player-cons"
          width="90%"
          height="90%"
          light={
            <Image
              className="lg:h-full lg:w-full"
              width={682}
              height={384}
              src="/images/bg_video_player.png"
              alt="Thumbnail"
            />
          }
          controls
          url={"/videos/Tokyo_2020_US_Equestrian_Trailer.mp4"}
        />
        <ReactPlayer
          className="react-player-cons"
          width="90%"
          height="90%"
          light={
            <Image
              className="lg:h-full lg:w-full"
              width={682}
              height={384}
              src="/images/bg_video_player.png"
              alt="Thumbnail"
            />
          }
          controls
          url={"/videos/Tokyo_2020_US_Equestrian_Trailer.mp4"}
        />
      </div>
    </section>
  )
}
