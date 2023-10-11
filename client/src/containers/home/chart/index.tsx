import React, { useMemo } from "react";

import { scaleLinear } from "@visx/scale";
import { motion } from "framer-motion";

import { Country } from "@/types/country";

import { LABEL_MARGIN, TRANSITION } from "@/constants/charts";

import Drivers from "@/containers/home/chart/drivers";

export type ChartProps = {
  data: Country;
  mode: "drivers" | "gap" | "opportunities";
  percentage: number;
  width: number;
  height: number;
  delay: number;
  absoluteWidthScale: ReturnType<typeof scaleLinear<number>>;
};

export default function Chart({
  data,
  mode,
  percentage,
  width: parentWidth,
  delay,
  absoluteWidthScale,
}: ChartProps) {
  const widthScale = scaleLinear<number>({
    domain: [0, 1],
    range: [
      0,
      absoluteWidthScale(data.available + data.needed) * parentWidth - LABEL_MARGIN ?? 200,
    ],
  });

  const width = useMemo(() => {
    if (mode === "opportunities") return 0;
    return mode !== "drivers" ? widthScale(percentage) : 200;
  }, [mode, percentage, widthScale]);

  const gapWidth = widthScale(1 - percentage);
  const height = mode !== "drivers" ? 40 : 200;

  return (
    <div className="relative flex w-full">
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

      <Drivers
        data={data}
        mode={mode}
        width={parentWidth}
        height={height}
        widthScale={widthScale}
      />

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
          delay: mode !== "drivers" ? delay + TRANSITION.duration : 0,
        }}
      />
    </div>
  );
}
