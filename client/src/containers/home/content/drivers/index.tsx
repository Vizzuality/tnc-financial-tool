"use client";

import { ParentSize } from "@visx/responsive";

import { cn } from "@/lib/classnames";

import { COUNTRIES } from "@/constants/countries";

import ChartDrivers from "@/containers/home/chart/drivers-mobile";

const Drivers = (): JSX.Element => {
  return (
    <div className="w-full">
      <div className="space-y-10 py-10 lg:py-40">
        <header className="flex w-full justify-between">
          <div className="space-y-5">
            <h1 className="text-sm font-bold uppercase tracking-widest">Funding drivers</h1>
            <p className="max-w-xl text-lg">
              <span className="text-grass">Public domestic funding</span> is the largest driver of
              NCS funding in 6 of 8 focus countries.
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
                  {({ width, height }) => <ChartDrivers width={width} height={height} data={d} />}
                </ParentSize>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drivers;
