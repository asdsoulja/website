        "use client"

        import { AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
        import { motion, useAnimate, useInView } from "framer-motion"
        import { Avatar } from "@/components/ui/avatar"
        import { JSXElementConstructor, ReactElement, ReactNode, useEffect } from "react"

        export default function WhyMe() : any  {
            const [scope, animate] = useAnimate()
            const isInView = useInView(scope)
            
            useEffect(() => {
                if (isInView) {
                animate(scope.current, { opacity: 1, animate: 'slideUpEnterQuick'})
                }
            }, [isInView])
            return (
                    <motion.div
                        className="box opacity-0 container"
                        ref={scope}
                        /**
                        * Setting the initial keyframe to "null" will use
                        * the current value to allow for interruptable keyframes.
                        */
                        animate={{
                            scale: [1, 1, 1, 1.02, 1],
                            rotate: [0, -0.8, 0.7, -0.3, 0],
                            borderRadius: ["0%", "0%", "0%", "0%", "0%"]
                          }}
                          transition={{
                            duration: 5,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 0
                          }}>
                            <div className="container flex max-w-[980px] flex-auto h-auto text-lg py-10 gap-6 select-none to-background">
                                <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl delay-50 transition-all hover:rotate- hover:animate-rotate-in items-center w-[980px]">Why me?</h1>
                            </div>
                    </motion.div>

            )
        }