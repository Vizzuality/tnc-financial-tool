import { motion } from "framer-motion";

import { LABEL_MARGIN, TRANSITION } from "@/constants/charts";

import { useChartContext } from "@/containers/home/chart/provider";

export default function ChartGap() {
  const { data, index, mode, widthScale } = useChartContext();
  const percentage = data.available / (data.needed + data.available);
  const gapWidth = widthScale(1 - percentage);

  return (
    <motion.div
      className="flex w-full items-center space-x-1 border-x-4 border-gray-900"
      initial={{
        width: 0,
        x: LABEL_MARGIN,
      }}
      animate={{
        width: mode === "gap" ? gapWidth : "0%",
        x: LABEL_MARGIN,
      }}
      transition={{
        duration: mode !== "drivers" ? TRANSITION.duration : 0,
        delay: mode !== "drivers" ? index * 0.1 + TRANSITION.duration : 0,
      }}
    >
      <div className="h-full w-full bg-[#E23248]" />

      <motion.span
        className="whitespace-nowrap"
        initial={{
          opacity: 0,
          x: -10,
        }}
        animate={{
          opacity: mode === "gap" ? 1 : 0,
          x: mode === "gap" ? 0 : -10,
        }}
        transition={{
          duration: mode !== "drivers" ? TRANSITION.duration : 0,
          delay: mode !== "drivers" ? index * 0.1 + TRANSITION.duration : 0,
        }}
      >{`$ ${data.needed}`}</motion.span>
    </motion.div>
  );
}
