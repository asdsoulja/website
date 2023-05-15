import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Curves } from "@/components/site-layout/curves"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { useEffect } from "react"
import { motion, useAnimate, useInView } from "framer-motion"
import { Reorder } from "framer-motion"
import WelcomeText from "@/components/components-display/welcome-text"
import { Terminal, Waves } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Bio from "@/components/components-display/bio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import WhyMe from "@/components/components-display/why-me-1"
import FadeInWhenVisible from "@/components/components-display/why-me-2"
import WhyMe2 from "@/components/components-display/why-me-2"
import WhyMe3 from "@/components/components-display/why-me-3"


export default function IndexPage() {
  return (
    <>
    <section className="">
      <div className="to-background relative flex-auto animate-slideDownEnter1s select-none">
        <Curves.first />
        <p className="flex max-w-7.5xl min-h-min text-lg text-muted-foreground sm:text-xl container items-center gap-6 pb-2 scroll-m-10 opacity-50 animate-slideAwayUp transition ease-in-out hover:scale-150 justify-center relative">hover objects on screen to see animations!</p>
      </div>
      <div className="flex h-auto px-60">
        <WelcomeText/>
      </div>
      <section className="animate-slideUpEnterQuick w-screen max-w-min">
        <div className="self-stretch rotate-180 fill-foreground translate-y-0.6 w-[100vw] align-middle">
          <Curves.second />
        </div>
        <section className="flex bg-foreground w-screen">
          <div className= "px-5 text-background h-auto align-super relative select-none w-screen transition ease-in-out delay-50 hover:skew-y-1 hover:skew-x-2 hover:-translate-y-2 hover:-translate-x-5 hover:scale-95 bg-fixed">
            <Bio />
          </div>
        </section>
      </section>
      <section className="max-w-min w-screen">
        <div className="self-stretch fill-foreground relative translate-y-0.6 transition-all animate-slideUpEnterQuick">
          <Curves.third />
        </div>
        <div className= " select-none transition ease-in-out pt-20 text-center">
          <WhyMe />
        </div>
        <div className= "h-auto relative select-none w-screen transition ease-in-out delay-50 pt-24 scale-90">
          <ul className="marker:opacity-0">
            <WhyMe2 />
            <WhyMe3 />
          </ul>
        </div>
      </section>
    </section>
    </>
  )
}
