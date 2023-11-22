"use client";

import { useRef, useState } from "react";

import { ParentSize } from "@visx/responsive";
import { scaleLinear } from "@visx/scale";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import { cn } from "@/lib/classnames";

import { TRANSITION } from "@/constants/charts";
import { COUNTRIES } from "@/constants/countries";

import Chart from "@/containers/home/chart";
import Header from "@/containers/home/content/header";
import Legend from "@/containers/home/content/legend";

const absoluteGlobalScale = scaleLinear<number>({
  domain: [0, Math.max(...COUNTRIES.map((d) => d.available + d.needed))],
  range: [0.15, 1],
});

const relativeGlobalScale = scaleLinear<number>({
  domain: [0, Math.max(...COUNTRIES.map((d) => d.available_by_GDP + d.needed_by_GDP))],
  range: [0.15, 1],
});

const Content = (): JSX.Element => {
  const [mode, setMode] = useState<"drivers" | "gap" | "opportunities">("drivers");
  const [unit, setUnit] = useState<"absolute" | "relative">("absolute");

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latestScrollY: number) => {
    if (latestScrollY < 0.25) {
      setMode("drivers");
    }
    if (latestScrollY > 0.25 && latestScrollY < 0.6) {
      setMode("gap");
    }
    if (latestScrollY > 0.6) {
      setMode("opportunities");
    }
  });

  return (
    <>
      <div ref={scrollRef} className="relative">
        <div className="container sticky top-0 h-[100svh] w-full">
          <div className="w-full py-20">
            <Header mode={mode} unit={unit} onUnitChange={setUnit} />

            <div
              className={cn({
                "relative grid grid-cols-10 gap-x-5 pt-10": true,
                "gap-y-20": mode === "drivers",
                "gap-y-5": mode !== "drivers",
              })}
            >
              {COUNTRIES.map((d, i) => (
                <motion.div
                  key={d.id}
                  layout="position"
                  className={cn({
                    "relative col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2": true,
                    "sm:col-span-12 md:col-span-12 lg:col-span-12": mode !== "drivers",
                  })}
                  transition={TRANSITION}
                >
                  <div className="">
                    <ParentSize className="w-full">
                      {({ width, height }) => (
                        <Chart
                          mode={mode}
                          unit={unit}
                          index={i}
                          data={d}
                          width={width}
                          height={height}
                          absoluteGlobalScale={absoluteGlobalScale}
                          relativeGlobalScale={relativeGlobalScale}
                        />
                      )}
                    </ParentSize>
                  </div>
                </motion.div>
              ))}
            </div>

            <Legend mode={mode} />
          </div>
        </div>
        <div className="h-[600svh]" />
      </div>
    </>
  );
};

export default Content;
