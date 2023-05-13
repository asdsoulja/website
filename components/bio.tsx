"use client"

import { AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import { motion } from "framer-motion"
import { Avatar } from "@/components/ui/avatar"

export default function Bio() {
    return (
        <>
            <motion.div
                className="box"
                /**
                 * Setting the initial keyframe to "null" will use
                 * the current value to allow for interruptable keyframes.
                 */
                animate={{
                    scale: [1, 1.03, 0.95, 1.05, 1],
                    rotate: [0, 2, -0.1, -1.2, 0],
                    borderRadius: ["50%", "50%", "50%", "50%", "50%"]
                }}
                transition={{
                    duration: 10,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 0
                }}>
                <div className="flex-auto pl-96 h-auto max-w-fit text-lg pt-2 pb-20 grid items-start gap-6 flex-col relative select-none to-background -skew-x-5 justify-end bg-transparent slide-in-from-right-20 max-h-fit pointer-events-none animate-slideRightEnterQuickDelayed opacity-0 pr-3">
                    <Avatar className="scale-[6.00] border-x-blue-400 border-spacing-3 border">
                        <AvatarImage src="https://sun9-8.userapi.com/impg/NDCLPweyJa7W13XCod7rXO6QEcUc8cuG0ngZ0g/D314q3lU4ac.jpg?size=2560x2560&quality=95&sign=c4e9e3667dd26045863948a8d6734a53&type=album" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </motion.div><motion.div
                className="box"
                /**
                 * Setting the initial keyframe to "null" will use
                 * the current value to allow for interruptable keyframes.
                 */
                animate={{
                    scale: [1, 0.99, 1, 1.01, 1],
                    rotate: [0, 0.2, -0.1, 0.1, 0],
                    borderRadius: ["50%", "50%", "50%", "50%", "50%"]
                }}
                transition={{
                    duration: 5,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 0
                }}>
                    <div className="flex-auto max-w-fit h-auto pl-96 text-lg py-10 grid items-end gap-6 flex-col relative select-none to-background -skew-x-3 translate-x-96">
                        <h2 className="text-end text-2xl font-light animate-slideUpEnterQuickDelayed opacity-0 transition-all ease-in-out delay-50 hover:-translate-y-1 hover:translate-x-10 hover:scale-11">
                            I am a Computer Science student in my 3rd year of studies at York University. <br className="hidden sm:inline" />
                        </h2>
                        <h2 className="-translate-x-2 container text-end animate-slideUpEnterQuickDelayed2 text-3xl font-extrabold leading-tight tracking-tighter opacity-0 transition-all ease-in-out delay-50 hover:-translate-y-1 hover:translate-x-16 hover:scale-110">
                            Currently looking for an internship.
                        </h2>
                    </div>
                </motion.div>
            </>
    )
}