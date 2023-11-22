import { useState } from "react";

import { motion } from "framer-motion";

import { DRIVERS_COLORS, LABEL_MARGIN, TRANSITION } from "@/constants/charts";
import { MAX_OPPORTUNITIES } from "@/constants/countries";

import { useChartContext } from "@/containers/home/chart/provider";

export default function ChartOpportunities() {
  const [hover, setHover] = useState<boolean>(false); // [id, setHover
  const { index, mode, width, data } = useChartContext();

  return (
    <div
      className="absolute left-0 top-0 flex h-full w-full items-center"
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
                className="flex h-12 w-full items-center overflow-hidden border-4 px-2 text-[11px] leading-none"
                style={{
                  borderColor: DRIVERS_COLORS.find((c) => c.id === d.source)?.color,
                }}
                animate={{
                  height: hover ? 50 : 0,
                }}
                transition={{
                  duration: TRANSITION.duration / 2,
                }}
              >
                <motion.span
                  className="block"
                  animate={{
                    opacity: mode === "opportunities" ? 1 : 0,
                  }}
                  transition={{
                    duration: mode !== "drivers" ? TRANSITION.duration / 2 : 0,
                    delay:
                      mode === "opportunities"
                        ? 0.1 + (index + i) * 0.05 + TRANSITION.duration / 2 + TRANSITION.duration
                        : 0,
                  }}
                >
                  {d.name}
                </motion.span>
              </motion.div>
            </motion.div>
          );
        })}
      </ul>
    </div>
  );
}
