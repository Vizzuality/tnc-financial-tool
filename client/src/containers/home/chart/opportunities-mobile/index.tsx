"use client";

import { Country } from "@/types/country";

import { DRIVERS_COLORS } from "@/constants/charts";
import { MAX_OPPORTUNITIES } from "@/constants/countries";

import OpportunitiesTooltip from "@/containers/home/chart/tooltips/opportunities";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface ChartOpportunitiesProps {
  width: number;
  height: number;
  data: Country;
}

export default function ChartOpportunities({ width: parentWidth, data }: ChartOpportunitiesProps) {
  // Size
  const width = parentWidth;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div
          className="flex h-full w-full items-center"
          style={{
            width: width,
          }}
        >
          <ul className="flex w-full space-x-[1%]">
            {data.opportunities.map((d) => {
              return (
                <div
                  key={d.id}
                  style={{
                    width: `${(1 / MAX_OPPORTUNITIES) * 100 - 1}%`,
                  }}
                >
                  <div
                    className="flex h-0 w-full items-center overflow-hidden border-4 px-2 text-[11px] leading-none"
                    style={{
                      borderColor: DRIVERS_COLORS.find((c) => c.id === d.source)?.color,
                    }}
                  >
                    <span className="block">{d.name}</span>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </SheetTrigger>

      <SheetContent side="bottom" theme="dark">
        <OpportunitiesTooltip data={data} />
      </SheetContent>
    </Sheet>
  );
}
