"use client";

import { useRef, useState } from "react";

import { ParentSize } from "@visx/responsive";
import { scaleLinear } from "@visx/scale";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";

import { cn } from "@/lib/classnames";

import { TRANSITION } from "@/constants/charts";
import { COUNTRIES } from "@/constants/countries";

import Chart from "@/containers/home/chart";

const widthScale = scaleLinear<number>({
  domain: [0, Math.max(...COUNTRIES.map((d) => d.available + d.needed))],
  range: [0.05, 1],
});

const variants = {
  initial: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.5,
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.25,
    },
  },
};

const Content = (): JSX.Element => {
  const [mode, setMode] = useState<"drivers" | "gap" | "opportunities">("drivers");
  const [unit, setUnit] = useState<"absolute" | "relative">("absolute");

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latestScrollY: number) => {
    if (mode !== "drivers" && latestScrollY < 0.25) {
      setMode("drivers");
    }
    if (mode !== "gap" && latestScrollY > 0.25 && latestScrollY < 0.6666) {
      setMode("gap");
    }
    if (mode !== "opportunities" && latestScrollY > 0.6666) {
      setMode("opportunities");
    }
  });

  return (
    <>
      <div className="container sticky top-0 h-[100svh] w-full">
        <div className="space-y-10 py-20">
          <div className="relative h-32">
            <AnimatePresence>
              {mode === "drivers" && (
                <motion.header
                  {...variants}
                  key="header-drivers"
                  className="absolute left-0 top-0 flex w-full justify-between"
                >
                  <div className="space-y-5">
                    <h1 className="text-sm font-bold uppercase tracking-widest">Funding drivers</h1>
                    <p className="max-w-xl text-2lg">
                      <span className="text-grass">Public domestic funding</span> is the largest
                      driver of NCS funding in 6 of 8 focus countries.
                    </p>
                  </div>
                </motion.header>
              )}

              {mode === "gap" && (
                <motion.header
                  {...variants}
                  key="header-gap"
                  className="absolute left-0 top-0 flex w-full items-end justify-between"
                >
                  <div className="space-y-5">
                    <h1 className="text-sm font-bold uppercase tracking-widest">Funding needs</h1>
                    <p className="max-w-xl text-2lg">
                      Half of focus countries have{" "}
                      <span className="text-red-600">less than 5%</span> of NCS funding needed.
                    </p>
                  </div>

                  <div className="space-x-1 border border-white/20 p-2">
                    <button
                      className={cn({
                        "px-2 py-1 text-sm": true,
                        "hover:bg-white/10": unit !== "absolute",
                        "bg-white text-gray-900": unit === "absolute",
                      })}
                      onClick={() => setUnit("absolute")}
                    >
                      Absolute
                    </button>

                    <button
                      className={cn({
                        "px-2 py-1 text-sm": true,
                        "hover:bg-white/10": unit !== "relative",
                        "bg-white text-gray-900": unit === "relative",
                      })}
                      onClick={() => setUnit("relative")}
                    >
                      Relative GDP
                    </button>
                  </div>
                </motion.header>
              )}

              {mode === "opportunities" && (
                <motion.header
                  {...variants}
                  key="header-oppotunities"
                  className="absolute left-0 top-0 flex w-full justify-between"
                >
                  <div className="space-y-5">
                    <h1 className="text-sm font-bold uppercase tracking-widest">
                      Funding opportunities
                    </h1>
                    <p className="max-w-4xl text-2lg">
                      Policy reforms, carbon markets, and nature-positive economies have the
                      greatest potential to{" "}
                      <span className="text-sky">accelerate the implementation of NCS.</span>
                    </p>
                  </div>
                </motion.header>
              )}
            </AnimatePresence>
          </div>

          <div
            className={cn({
              "relative grid grid-cols-12 gap-x-5": true,
              "gap-y-20": mode === "drivers",
              "gap-y-5": mode !== "drivers",
            })}
          >
            {COUNTRIES.map((d, i) => (
              <motion.div
                key={d.id}
                layout="position"
                className={cn({
                  "relative col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3": true,
                  "sm:col-span-12 md:col-span-12 lg:col-span-12": mode !== "drivers",
                })}
                transition={TRANSITION}
              >
                <div className="">
                  <ParentSize className="w-full">
                    {({ width, height }) => (
                      <Chart
                        mode={mode}
                        index={i}
                        data={d}
                        width={width}
                        height={height}
                        absoluteWidthScale={widthScale}
                      />
                    )}
                  </ParentSize>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="-mt-[100svh] h-[600svh]" />
    </>
  );
};

export default Content;
