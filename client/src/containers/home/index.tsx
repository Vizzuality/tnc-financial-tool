"use client";

import { useState } from "react";

import { ParentSize } from "@visx/responsive";
import { motion } from "framer-motion";

import { cn } from "@/lib/classnames";

import TreemapChart from "@/containers/charts/treemap";

import { Button } from "@/components/ui/button";

const DATA = [
  {
    id: "treemap",
    percentage: 0.3,
  },
  {
    id: "private",
    percentage: 0.01,
  },
  {
    id: "public",
    percentage: 0.5,
  },
  {
    id: "philantropy",
    percentage: 0.1,
  },
  {
    id: "international-aid",
    percentage: 0.3,
  },
  {
    id: "environmental",
    percentage: 0.8,
  },
  {
    id: "treemap2",
    percentage: 0.05,
  },
  {
    id: "private2",
    percentage: 0.25,
  },
];

const Home = (): JSX.Element => {
  const [mode, setMode] = useState<"tree" | "bar">("tree");

  return (
    <div className="container h-screen w-full">
      <div className="space-y-5 p-5">
        <h1 className="text-4xl">Treemap</h1>

        <div className="relative grid grid-cols-12 gap-5">
          {DATA.map((d, i) => (
            <motion.div
              key={d.id}
              layout
              className={cn({
                "relative col-span-12 md:col-span-3": true,
                "md:col-span-12": mode === "bar",
              })}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <div className="flex w-full">
                <ParentSize>
                  {({ width, height }) => (
                    <TreemapChart
                      mode={mode}
                      percentage={d.percentage}
                      width={width}
                      height={height}
                      delay={i * 0.1}
                    />
                  )}
                </ParentSize>
              </div>
            </motion.div>
          ))}
        </div>

        <Button
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
