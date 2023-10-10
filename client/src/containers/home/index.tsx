"use client";

import { useState } from "react";

import { ParentSize } from "@visx/responsive";
import { motion } from "framer-motion";

import { cn } from "@/lib/classnames";

import { COUNTRIES } from "@/constants/countries";

import Chart from "@/containers/home/chart";

import { Button } from "@/components/ui/button";

const Home = (): JSX.Element => {
  const [mode, setMode] = useState<"tree" | "bar">("tree");

  return (
    <div className="container h-screen w-full">
      <div className="space-y-5 p-5">
        <h1 className="text-4xl">Funding drivers</h1>

        <div className="relative grid grid-cols-12 gap-5">
          {COUNTRIES.map((d, i) => (
            <motion.div
              key={d.id}
              layout="position"
              className={cn({
                "relative col-span-12 md:col-span-3": true,
                "md:col-span-12": mode !== "tree",
              })}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <ParentSize className="w-full">
                {({ width, height }) => (
                  <Chart
                    mode={mode}
                    data={d}
                    percentage={d.available / (d.needed + d.available)}
                    width={width}
                    height={height}
                    delay={i * 0.1}
                  />
                )}
              </ParentSize>
            </motion.div>
          ))}
        </div>

        <Button
          className="relative z-10 translate-y-10"
          onClick={() => {
            setMode(mode === "tree" ? "bar" : "tree");
          }}
        >
          Toogle {mode === "tree" ? "Bar" : "Tree"}
        </Button>
      </div>
    </div>
  );
};

export default Home;
