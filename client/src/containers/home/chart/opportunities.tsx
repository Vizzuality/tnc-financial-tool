import { motion } from "framer-motion";

import { LABEL_MARGIN, TRANSITION } from "@/constants/charts";

import { useChartContext } from "@/containers/home/chart/provider";

export default function ChartOpportunities() {
  const { index, mode, width } = useChartContext();
  // console.log("ChartOpportunities", { data, index, mode, widthScale, opportunitiesWidth });

  return (
    <div
      className="absolute left-0 top-0 h-full w-full border-l-4 border-gray-900"
      style={{
        width: width - LABEL_MARGIN,
        left: LABEL_MARGIN,
        pointerEvents: mode === "opportunities" ? "auto" : "none",
      }}
    >
      <motion.div
        key="opportunities"
        className="h-full w-full"
        initial={{
          width: 0,
        }}
        animate={{
          width: mode === "opportunities" ? "100%" : "0%",
        }}
        transition={{
          duration: mode !== "drivers" ? TRANSITION.duration : 0,
          delay: mode === "opportunities" ? 0.1 + index * 0.1 + TRANSITION.duration : 0,
        }}
      >
        <div className="h-full w-full bg-grass" />
      </motion.div>
    </div>
  );
}
