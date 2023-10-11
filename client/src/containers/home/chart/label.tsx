import { scaleLinear } from "@visx/scale";
import { motion } from "framer-motion";

import { Country } from "@/types/country";

import { LABEL_MARGIN, TRANSITION } from "@/constants/charts";

export type ChartLabelProps = {
  data: Country;
  index: number;
  mode: "drivers" | "gap" | "opportunities";
  parentWidth: number;
  parentHeight: number;
  widthScale: ReturnType<typeof scaleLinear<number>>;
};

export default function ChartLabel({ data, mode }: ChartLabelProps) {
  const width = 200;
  const height = mode !== "drivers" ? 40 : 200;

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
