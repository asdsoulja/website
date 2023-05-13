"use client"


import { motion } from "framer-motion";
import Feedback from "./welcomeToMyWebsite";
import Welcome from "./welcomeToMyWebsite";

export default function WelcomeText() {
  return (
    <motion.div
      className="box"
      /**
       * Setting the initial keyframe to "null" will use
       * the current value to allow for interruptable keyframes.
       */
      animate={{
        scale: [1, 1, 1, 1.02, 1],
        rotate: [0, -0.8, 0.7, -0.3, 0],
        borderRadius: ["50%", "50%", "50%", "50%", "50%"]
      }}
      transition={{
        duration: 10,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 0
      }}>
        <section className="container grid items-center gap-6 select-none">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl transition ease-in-out delay-50 hover:-translate-y-1 hover:-translate-x-10 hover:scale-110 animate-slideRightEnter1s">
            Hello! <br className="hidden sm:inline" />
            </h1>
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl transition ease-in-out delay-50 hover:-translate-y-1 hover:translate-x-10 hover:scale-110 animate-slideLeftEnter1s hover:-skew-y-1">
            My name is Dmitrii.
            </h1>
            <div className="max-w-[700px] text-lg text-muted-foreground sm:text-xl transition ease-in-out delay-50 hover:scale-150 hover:translate-x-10 hover:text-slate-600 animate-slideUpEnter1s hover:skew-y-1 hover:skew-x-1">
            <Welcome />
            </div>
        </div>
        </section>
    </motion.div>
  );
}