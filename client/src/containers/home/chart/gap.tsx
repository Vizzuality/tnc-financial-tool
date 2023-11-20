import { motion } from "framer-motion";

import { LABEL_MARGIN, TRANSITION } from "@/constants/charts";

import { useChartContext } from "@/containers/home/chart/provider";

export default function ChartGap() {
  const { data, index, mode, width, widthScale } = useChartContext();
  const percentage = data.available / (data.needed + data.available);
  const margin = widthScale(percentage);
  const gapWidth = widthScale(1 - percentage);

  return (
    <div
      className="absolute left-0 top-0 h-full w-full border-l-4 border-gray-900"
      style={{
        width: width - LABEL_MARGIN,
        left: LABEL_MARGIN,
      }}
    >
      <motion.div
        className="absolute left-0 top-0 flex h-full w-full items-center space-x-1"
        initial={{
          width: 0,
        }}
        animate={{
          width: mode === "gap" ? gapWidth : "0%",
          x: mode === "gap" ? margin : "0%",
        }}
        transition={{
          duration: mode !== "drivers" ? TRANSITION.duration : 0,
          delay: mode === "gap" ? index * 0.1 + TRANSITION.duration : 0,
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
            delay: mode === "gap" ? index * 0.1 + TRANSITION.duration : 0,
          }}
        >{`$ ${data.needed}`}</motion.span>
      </motion.div>
    </div>
  );
}
