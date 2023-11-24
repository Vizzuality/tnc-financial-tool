"use client";

import { Country } from "@/types/country";

import { DRIVERS_COLORS } from "@/constants/charts";
import { getOpportunityOpacity } from "@/constants/opportunities";

export type OpportunitiesTooltipProps = {
  data: Country;
};

export default function OpportunitiesTooltip({ data }: OpportunitiesTooltipProps) {
  return (
    <div className="flex flex-col text-background">
      <h3 className="text-sm font-bold uppercase tracking-widest">{data.name}</h3>

      <ul className="w-full space-y-2 py-4">
        {data.opportunities.map((d) => {
          return (
            <div key={d.id} className="relative flex items-center ">
              <div className="relative flex w-full items-center overflow-hidden">
                <div
                  className="absolute left-0 top-1/2 z-10 h-full w-full -translate-y-1/2 border-4 px-2"
                  style={{
                    borderColor: DRIVERS_COLORS.find((c) => c.id === d.source)?.color,
                    opacity: getOpportunityOpacity(d.cost),
                  }}
                />

                <div className="relative z-0 flex w-full items-center overflow-hidden p-4 text-xs leading-none">
                  <span className="block">{d.name}</span>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
