import { motion } from "framer-motion";

import { useFormatCurrency, useFormatPercentage } from "@/lib/formats";

import { LABEL_MARGIN, TRANSITION } from "@/constants/charts";

import { useChartContext } from "@/containers/home/chart/provider";

export default function ChartGap() {
  const { data, mode, unit, width, absoluteScale, relativeScale } = useChartContext();
  const percentage =
    unit === "absolute"
      ? data.available / (data.needed + data.available)
      : data.available_by_GDP / (data.needed_by_GDP + data.available_by_GDP);
  const widthScale = unit !== "absolute" ? relativeScale : absoluteScale;
  const margin = widthScale(percentage);
  const gapWidth = widthScale(1 - percentage);

  // Formats
  const { format: formatCurrency } = useFormatCurrency();
  const { format: formatPercentage } = useFormatPercentage();

  return (
    <div
      className="absolute left-0 top-0 z-10 h-full w-full border-l border-gray-900"
      style={{
        width: width - LABEL_MARGIN,
        left: LABEL_MARGIN,
        pointerEvents: mode === "gap" ? "auto" : "none",
      }}
    >
      <motion.div
        className="absolute left-0 top-0 flex h-full w-full items-center space-x-2"
        initial={{
          width: 0,
        }}
        animate={{
          width: mode === "gap" ? gapWidth : "0%",
          x: mode === "gap" ? margin : "0%",
        }}
        transition={{
          duration: mode !== "drivers" ? TRANSITION.duration : 0,
          // delay: mode === "gap" ? 0.1 + index * 0.05 + TRANSITION.duration : 0,
        }}
      >
        <div className="h-full w-full bg-[#E23248]" />

        <motion.span
          className="whitespace-nowrap text-sm"
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
            // delay: mode === "gap" ? 0.1 + index * 0.05 + TRANSITION.duration : 0,
          }}
        >
          {unit === "absolute"
            ? `${formatCurrency(data.needed)}`
            : `${formatPercentage(data.needed_by_GDP)}`}
        </motion.span>
      </motion.div>
    </div>
  );
}
