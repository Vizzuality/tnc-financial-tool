import { scaleLinear } from "@visx/scale";
import { motion } from "framer-motion";

import { Country } from "@/types/country";

import { LABEL_MARGIN, TRANSITION } from "@/constants/charts";

import Drivers from "@/containers/home/chart/drivers";
import ChartLabel from "@/containers/home/chart/label";

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
  height: parentHeight,
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

  const gapWidth = widthScale(1 - percentage);

  return (
    <div className="relative flex w-full">
      <ChartLabel
        data={data}
        mode={mode}
        parentWidth={parentWidth}
        parentHeight={parentHeight}
        widthScale={widthScale}
      />

      <Drivers
        data={data}
        mode={mode}
        parentWidth={parentWidth}
        parentHeight={parentHeight}
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
