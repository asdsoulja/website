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
import { useEffect } from "react"
import { motion } from "framer-motion"
import { Reorder } from "framer-motion"
import WelcomeText from "@/components/welcomeText"
import { Terminal, Waves } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Bio from "@/components/bio"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function IndexPage() {
  return (
    <>
    <div className="to-background relative flex-auto animate-slideDownEnter1s select-none">
      <Curves.first />
       <p className="flex max-w-7.5xl min-h-min text-lg text-muted-foreground sm:text-xl container items-center gap-6 pb-2 scroll-m-10 opacity-50 animate-slideAwayUp transition ease-in-out hover:scale-150 justify-center relative">hover objects on screen to see animations!</p>
    </div>
    <div className="flex h-auto px-60">
      <WelcomeText/>
    </div>
    <div className="pt-40 px-5 h-auto align-super relative select-none w-screen transition ease-in-out delay-50 hover:skew-y-1 hover:skew-x-2 hover:-translate-y-2 hover:-translate-x-5 hover:scale-95">
      <Bio />
    </div>
    </>
  )
}
