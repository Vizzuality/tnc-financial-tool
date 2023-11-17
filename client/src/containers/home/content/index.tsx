"use client";

import { useRef, useState } from "react";

import { ParentSize } from "@visx/responsive";
import { scaleLinear } from "@visx/scale";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import { cn } from "@/lib/classnames";

import { TRANSITION } from "@/constants/charts";
import { COUNTRIES } from "@/constants/countries";

import Chart from "@/containers/home/chart";

const widthScale = scaleLinear<number>({
  domain: [0, Math.max(...COUNTRIES.map((d) => d.available + d.needed))],
  range: [0.05, 1],
});

const Content = (): JSX.Element => {
  const [mode, setMode] = useState<"drivers" | "gap" | "opportunities">("drivers");

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latestScrollY: number) => {
    if (mode !== "drivers" && latestScrollY < 0.3333) {
      setMode("drivers");
    }
    if (mode !== "gap" && latestScrollY > 0.3333 && latestScrollY < 0.6666) {
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
          <header className="space-y-5">
            <h1 className="text-sm font-bold uppercase tracking-widest">Funding drivers</h1>
            <p className="max-w-xl text-2lg">
              <span className="text-grass">Public domestic funding</span> is the largest driver of
              NCS funding in 6 of 8 focus countries.
            </p>
          </header>

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
