"use client"

import { AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import { motion, useAnimate, useInView, useMotionValue, useTransform } from "framer-motion"
import { Avatar } from "@/components/ui/avatar"
import { JSXElementConstructor, ReactElement, ReactNode, useEffect } from "react"

export default function WhyMe2() : any  {
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
      
    useEffect(() => {
        if (isInView) {
        animate(scope.current, { opacity: 1, animate: 'slideUpEnterQuick'})
        const animation = animate(count, 150, { duration: 10 });
        return animation.stop;
        }
    }, [isInView])
    return (
            <motion.div
                className="box opacity-0"
                ref={scope}
                /**
                 * Setting the initial keyframe to "null" will use
                 * the current value to allow for interruptable keyframes.
                 */
                animate={{
                  scale: [1, 1, 1, 1.02, 1],
                  rotate: [0, -0.4, 0.5, -0.1, 0],
                  borderRadius: ["0%", "0%", "0%", "0%", "0%"]
                }}
                transition={{
                  duration: 5,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 0
                }}>
                    <div className="flex-auto max-w-fit h-auto py-10 grid items-end gap-6 flex-col select-none to-background ref={scope}">
                      <div className="flex text-4xl font-normal transition-all hover:-skew-x-2 hover:translate-x-5 hover:scale-110">
                        <motion.h2 className="">{rounded}</motion.h2>
                        <h3 className=" transition-all">+ LeetCode problems solved</h3>
                      </div>
                    </div>
            </motion.div>

    )
}