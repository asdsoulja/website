import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Curves } from "@/components/curves"
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


export default function IndexPage() {
  return (
    <>
    <div className="to-background relative flex-auto animate-slideDownEnter1s select-none">
      <Curves.first />
       <p className="flex max-w-7.5xl min-h-min text-lg text-muted-foreground sm:text-xl container items-start gap-6 pb-2 scroll-m-10 opacity-50 animate-slideAwayUp transition ease-in-out hover:scale-150">hover objects on screen to see animations!</p>
    </div>
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 select-none">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl transition ease-in-out delay-50 hover:-translate-y-1 hover:-translate-x-10 hover:scale-110 animate-slideRightEnter1s">
        Hello! <br className="hidden sm:inline" />
      </h1>
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl transition ease-in-out delay-50 hover:-translate-y-1 hover:translate-x-10 hover:scale-110 animate-slideLeftEnter1s">
        My name is Dmitrii.
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl transition ease-in-out delay-50 hover:scale-150 hover:translate-x-10 hover:text-slate-600 animate-slideUpEnter1s">
        Welcome to my website
      </p>
    </div> {/*
    <div className="flex gap-4">
      <Link
        href={siteConfig.links.docs}
        target="_blank"
        rel="noreferrer"
        className={buttonVariants({ size: "lg" })}
      >
        Documentation
      </Link>
      <Link
        target="_blank"
        rel="noreferrer"
        href={siteConfig.links.github}
        className={buttonVariants({ variant: "outline", size: "lg" })}
      >
        GitHub
      </Link>
    </div> */}
      </section></>
  )
}
