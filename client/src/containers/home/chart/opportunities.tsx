import { useState } from "react";

import { motion } from "framer-motion";

import { DRIVERS_COLORS, LABEL_MARGIN, TRANSITION } from "@/constants/charts";
import { MAX_OPPORTUNITIES } from "@/constants/countries";

import { useChartContext } from "@/containers/home/chart/provider";

export default function ChartOpportunities() {
  const [hover, setHover] = useState<boolean>(false); // [id, setHover
  const { index, mode, width, data } = useChartContext();

  const getOpacity = (d: number) => {
    if (d === 0) return 0.32;
    if (d === 0.5) return 0.32;
    if (d === 1) return 0.64;
    if (d === 1.5) return 1;
  };

  return (
    <div
      className="absolute left-0 top-0 z-0 flex h-full w-full items-center"
      style={{
        width: width - LABEL_MARGIN,
        left: LABEL_MARGIN,
        pointerEvents: mode === "opportunities" ? "auto" : "none",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseMove={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ul className="flex w-full space-x-[1%]">
        {data.opportunities.map((d, i) => {
          return (
            <motion.div
              key={d.id}
              className="relative flex items-center "
              initial={{
                width: `${(1 / MAX_OPPORTUNITIES) * 100 - 1}%`,
                scaleY: 0,
              }}
              animate={{
                width: `${(1 / MAX_OPPORTUNITIES) * 100 - 1}%`,
                scaleY: mode === "opportunities" ? 1 : 0,
              }}
              transition={{
                duration: mode !== "drivers" ? TRANSITION.duration / 2 : 0,
                delay:
                  mode === "opportunities" ? 0.1 + (index + i) * 0.05 + TRANSITION.duration : 0,
              }}
            >
              <motion.div
                className="relative flex items-center overflow-hidden"
                animate={{
                  height: hover ? 50 : 8,
                }}
                transition={{
                  duration: TRANSITION.duration / 2,
                }}
              >
                <div
                  className="absolute left-0 top-1/2 z-10 h-full w-full -translate-y-1/2 border-4 px-2"
                  style={{
                    borderColor: DRIVERS_COLORS.find((c) => c.id === d.source)?.color,
                    opacity: getOpacity(d.cost),
                  }}
                />

                <motion.div
                  className="relative z-0 flex w-full items-center overflow-hidden px-3 text-[11px] leading-none"
                  animate={{
                    opacity: hover ? 1 : 0,
                  }}
                  transition={{
                    duration: TRANSITION.duration / 2,
                  }}
                >
                  <span className="block">{d.name}</span>
                </motion.div>
              </motion.div>
            </motion.div>
          );
        })}
      </ul>
    </div>
  );
}
