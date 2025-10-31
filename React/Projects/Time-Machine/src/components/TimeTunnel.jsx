import React from "react";
import { motion } from "framer-motion";

const tunnelVariants = {
  animate: {
    scale: [1, 2, 3, 2, 1],
    opacity: [1, 0.8, 0.5, 0.8, 1],
    rotate: [0, 360],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: 0,
    },
  },
};

export default function TimeTunnel() {
  return (
    <motion.div
      className="tunnel"
      variants={tunnelVariants}
      animate="animate"
      style={{
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        border: "5px solid cyan",
        boxShadow: "0 0 50px cyan",
      }}
    />
  );
}
