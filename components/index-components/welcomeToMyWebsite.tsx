"use client"


import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <motion.div
      className="box"
      /**
       * Setting the initial keyframe to "null" will use
       * the current value to allow for interruptable keyframes.
       */
      whileHover={{ scale: [null, 1.5, 1.2] }}
      transition={{ duration: 0.3 }}
    >
    Welcome to my website.
    </motion.div>
  );
}
