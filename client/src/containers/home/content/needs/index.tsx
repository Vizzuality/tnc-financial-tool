"use client";

import { useState } from "react";

import { ParentSize } from "@visx/responsive";
import { scaleLinear } from "@visx/scale";

import { cn } from "@/lib/classnames";

import { COUNTRIES } from "@/constants/countries";

import ChartNeeds from "@/containers/home/chart/needs-mobile";

const absoluteGlobalScale = scaleLinear<number>({
  domain: [0, Math.max(...COUNTRIES.map((d) => d.available + d.needed))],
  range: [0.05, 1],
});

const relativeGlobalScale = scaleLinear<number>({
  domain: [0, Math.max(...COUNTRIES.map((d) => d.available_by_GDP + d.needed_by_GDP))],
  range: [0.05, 1],
});

const Needs = (): JSX.Element => {
  const [unit, setUnit] = useState<"absolute" | "relative">("absolute");

  return (
    <div className="w-full">
      <div className="space-y-10 py-10 lg:py-40">
        <header className="w-full space-y-5">
          <div className="space-y-5">
            <h1 className="text-sm font-bold uppercase tracking-widest">Funding needs</h1>
            <p className="max-w-xl text-lg">
              Half of focus countries have <span className="text-red-600">less than 5%</span> of NCS
              funding needed.
            </p>
          </div>

          <div className="flex justify-start">
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
          </div>
        </header>

        <div
          className={cn({
            "relative grid grid-cols-12 gap-4": true,
          })}
        >
          {COUNTRIES.map((d) => (
            <div
              key={d.id}
              className={cn({
                "col-span-12 md:col-span-12 lg:col-span-12": true,
              })}
            >
              <div className="space-y-1">
                <h3 className="text-sm">{d.name}</h3>
                <ParentSize className="h-5 w-full">
                  {({ width, height }) => (
                    <ChartNeeds
                      width={width}
                      height={height}
                      unit={unit}
                      data={d}
                      absoluteScale={absoluteGlobalScale}
                      relativeScale={relativeGlobalScale}
                    />
                  )}
                </ParentSize>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Needs;
