"use client"
import { Italiana } from "next/font/google"
import Head from "next/head"
import Consulting from "components/Consulting/consulting"
import ConsultingVideoComponent from "components/ConsultingVideoComponent"
import Footer from "components/Footer"
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
        <meta property="og:image" content="/images/bg_video_player.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="android-chrome" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="android-chrome" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
        <link rel="manifest" href="./site.webmanifest"></link>
        <link rel="icon" type="image/png" href="/images/brasao_logo_01.png" />
        <title>Equestrianism Website Development</title>
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
            <Footer />
          </div>
        </div>
      </section>
    </>
  )
}
