"use client";

import { ParentSize } from "@visx/responsive";
// import { scaleLinear } from "@visx/scale";

import { cn } from "@/lib/classnames";

import { COUNTRIES } from "@/constants/countries";

import ChartOpportunities from "@/containers/home/chart/opportunities-mobile";

const Opportunities = (): JSX.Element => {
  return (
    <div className="w-full">
      <div className="space-y-10 py-10 lg:py-40">
        <header className="flex w-full justify-between">
          <div className="space-y-5">
            <h1 className="text-sm font-bold uppercase tracking-widest">Funding opportunities</h1>
            <p className="max-w-xl text-lg">
              Policy reforms, carbon markets, and nature-positive economies have the greatest
              potential to <span className="text-sky">accelerate the implementation of NCS.</span>
            </p>
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
                    <ChartOpportunities width={width} height={height} data={d} />
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

export default Opportunities;
