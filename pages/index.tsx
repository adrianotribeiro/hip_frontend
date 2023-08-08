"use client"
import { Italiana } from "next/font/google"
import Head from "next/head"
import Consulting from "components/Consulting/consulting"
import ConsultingVideoComponent from "components/ConsultingVideoComponent"
import FormSection from "components/FormSection"
import Header from "components/Header"
import HomeSection from "components/HomeSection"
import PropagandaArea from "components/PropagandaComponent"

const italiana = Italiana({
  subsets: ["latin"],
  weight: "400",
})
export default function Web() {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://next-enterprise.vercel.app/" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Blazity/next-enterprise/main/project-logo.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Next.js Enterprise Boilerplate</title>
      </Head>
      <section className={`body-container princpal-colors   ${italiana.className} `}>
        <div className="4xl:m-auto 4xl:min-w-[1920px] 4xl:max-w-[1920px]">
          <div className="4xl:m-auto 4xl:min-w-[1920px] 4xl:max-w-[1920px]">
            <Header />
            <HomeSection />
            <PropagandaArea />
            <ConsultingVideoComponent />
            <Consulting />
            <FormSection />
          </div>
        </div>
      </section>
    </>
  )
}
