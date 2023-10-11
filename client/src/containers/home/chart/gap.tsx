import { motion } from "framer-motion";

import { LABEL_MARGIN, TRANSITION } from "@/constants/charts";

import { useChartContext } from "@/containers/home/chart/provider";

export default function ChartGap() {
  const { data, index, mode, widthScale } = useChartContext();
  const percentage = data.available / (data.needed + data.available);
  const gapWidth = widthScale(1 - percentage);

  return (
    <motion.div
      className="w-full border-white bg-red-300"
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
    />
  );
}
