import React from "react"
import { ILayout } from "./types"
import SeoHead from "../SeoHead"
import Header from "../Header"
import Footer from "../Footer"

function BaseLayout({ children }: ILayout) {
  return (
    <div className="h-screen text-black bg-pink_7">
      <SeoHead title="Maz" description="Welcome to our Maz staking." image="/SEO_LOGO_ICON.png" />
      <Header />
      <div className="bg-[url('/images/bg_effect.png')] bg-center bg-cover pb-[70px]">
        <div className="relative z-[2]">{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default BaseLayout
