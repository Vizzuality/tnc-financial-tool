"use client";

import { motion } from "framer-motion";
import { useMediaMatch } from "rooks";

import { HEIGHT, LABEL_MARGIN, TRANSITION } from "@/constants/charts";

import { useChartContext } from "@/containers/home/chart/provider";

export default function ChartLabel() {
  const { data, mode } = useChartContext();
  const width = 180;
  const xxl = useMediaMatch("(min-height: 820px)");
  const h = xxl ? HEIGHT.xxl : HEIGHT.default;
  const height = mode !== "drivers" ? h : 180;

  return (
    <motion.div
      className="absolute left-0 top-0 flex items-center justify-center"
      initial={{
        x: mode === "drivers" ? width / 2 : LABEL_MARGIN - 10,
        y: mode === "drivers" ? height : height / 2,
      }}
      animate={{
        x: mode === "drivers" ? width / 2 : LABEL_MARGIN - 10,
        y: mode === "drivers" ? height : height / 2,
      }}
      transition={TRANSITION}
    >
      <motion.h2
        className="text-sm"
        initial={{
          x: mode === "drivers" ? "-50%" : "-100%",
          y: mode === "drivers" ? 5 : "-50%",
        }}
        animate={{
          x: mode === "drivers" ? "-50%" : "-100%",
          y: mode === "drivers" ? 5 : "-50%",
        }}
        transition={TRANSITION}
      >
        {data.name}
      </motion.h2>
    </motion.div>
  );
}
