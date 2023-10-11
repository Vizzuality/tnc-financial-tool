import { scaleLinear } from "@visx/scale";
import { motion } from "framer-motion";

import { Country } from "@/types/country";

import { LABEL_MARGIN, TRANSITION } from "@/constants/charts";

export type ChartGapProps = {
  data: Country;
  index: number;
  mode: "drivers" | "gap" | "opportunities";
  parentWidth: number;
  parentHeight: number;
  widthScale: ReturnType<typeof scaleLinear<number>>;
};

export default function ChartGap({ data, index, mode, widthScale }: ChartGapProps) {
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
