"use client";

import { useState } from "react";

import { ParentSize } from "@visx/responsive";
import { scaleLinear } from "@visx/scale";
import { motion } from "framer-motion";

import { cn } from "@/lib/classnames";

import { TRANSITION } from "@/constants/charts";
import { COUNTRIES } from "@/constants/countries";

import Chart from "@/containers/home/chart";

import { Button } from "@/components/ui/button";

const widthScale = scaleLinear<number>({
  domain: [0, Math.max(...COUNTRIES.map((d) => d.available + d.needed))],
  range: [0.05, 1],
});

const Home = (): JSX.Element => {
  const [mode, setMode] = useState<"drivers" | "gap" | "opportunities">("drivers");

  return (
    <div className="container h-screen w-full">
      <div className="space-y-10 py-20">
        <header className="space-y-5">
          <h1 className="text-4xl">Funding drivers</h1>
          <p className="text-lg">
            Public domestic funding is the largest driver of NCS funding in 6 of 8 focus countries.
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
                      data={d}
                      percentage={d.available / (d.needed + d.available)}
                      width={width}
                      height={height}
                      delay={i * 0.1}
                      absoluteWidthScale={widthScale}
                    />
                  )}
                </ParentSize>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="fixed bottom-20 right-20 z-10 flex space-x-5">
          <Button
            size="lg"
            onClick={() => {
              setMode("drivers");
            }}
          >
            Drivers
          </Button>
          <Button
            size="lg"
            onClick={() => {
              setMode("gap");
            }}
          >
            Gap
          </Button>
          <Button
            size="lg"
            onClick={() => {
              setMode("opportunities");
            }}
          >
            Opportunities
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
