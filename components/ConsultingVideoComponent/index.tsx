"use client"
import dynamic from "next/dynamic"
import Image from "next/image"
import React from "react"
export default function ConsultingVideoComponent(): React.ReactElement {
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

  return (
    <section className="">
      <div className="hidden xl:absolute xl:inline">
        <Image
          width={645.6}
          height={200}
          className="xl:w-[585px] h-xl:w-[559px] sm-2xl:w-[585px] lg-xl:w-[666px] 3xl:w-[685px] 4xl:w-[741px] "
          src={"/images/horse_rider_bg_fotor.png"}
          alt="Horseman"
        />
      </div>
      <div className="xl:flex xl:h-fit xl:flex-col xl:items-end xl:pr-6 3xl:pr-24">
        <div className="flex flex-col gap-3 px-4 py-8 md:gap-6 md:py-12 xl:w-[50%] xl:items-end xl:gap-3 sm-2xl:pr-12 3xl:gap-7">
          <p className="princpal-colors princpal-colors text-center text-[1.5rem] md:text-[2.5rem] md:leading-10 md:tracking-widest xl:w-[72%]  xl:text-right xl:tracking-normal lg-xl:text-[3rem] lg-xl:leading-[2.8rem] 3xl:w-[90%] 3xl:text-[4rem] 3xl:leading-[3.5rem]">
            Lorem Ipsum dolor sit amet, consectetur adispiscing elit.
          </p>
          <p className="text-center text-[1.3rem] text-white md:px-[1.5rem] md:text-[1.8rem] lg:px-24 xl:p-0 xl:text-right xl:text-[1.9rem] lg-xl:text-[2.2rem] 3xl:text-[2.5rem] 3xl:leading-[3rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum, arcu fermentum semper efficitur,
            risus quam imperdiet neque, sit amet ullamcorper purus eros vitae nunc{" "}
          </p>
          <div className="flex justify-center md:pt-4 xl:w-full xl:justify-end xl:pt-0">
            <button className="w-[50%] rounded bg-white py-1 text-[1rem] text-[#32312B] md:w-[30%] md:py-[0.50rem] xl:w-[60%] lg-xl:text-[1.5rem] 3xl:text-[1.5rem]">
              LOREM IPSUM
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 bg-[#A59D94] py-4 md:gap-6 md:py-8 xl:items-end xl:pr-8 sm-2xl:pr-16 3xl:pr-28">
        <ReactPlayer
          className="react-player"
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
          className="react-player"
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
