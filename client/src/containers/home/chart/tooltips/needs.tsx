"use client";

import { useFormatCurrency, useFormatPercentage } from "@/lib/formats";

import { Country } from "@/types/country";

import { DRIVERS } from "@/constants/drivers";

export type NeedsTooltipProps = {
  data: Country;
};

export default function NeedsTooltip({ data }: NeedsTooltipProps) {
  const { format: formatPercentage } = useFormatPercentage();
  const { format: formatCurrency } = useFormatCurrency();

  return (
    <div className="flex flex-col">
      <h3 className="text-sm font-bold uppercase tracking-widest">{data.name}</h3>

      <div className="divide-y-2 divide-gray-200">
        <div className="space-y-2 py-4">
          <div className="flex justify-between font-bold">
            <h4>% of need met</h4>
            <h4>{formatPercentage(data.available / (data.available + data.needed))}</h4>
          </div>

          <ul className="space-y-1">
            <li className="flex w-full items-center space-x-5 text-sm">
              <div className="flex items-center space-x-2">
                <div
                  className="h-6 w-2"
                  style={{
                    backgroundColor: "#E23248",
                  }}
                />

                <h4>Funding gap</h4>
              </div>

              <div className="grow text-right">{formatCurrency(data.needed)}B</div>
            </li>
          </ul>
        </div>

        <div className="space-y-2 py-4">
          <div className="flex justify-between font-bold">
            <h4>Funding/year needed</h4>
            <h4>{formatCurrency(data.available + data.needed)}B</h4>
          </div>
        </div>

        <div className="space-y-2 py-4">
          <div className="flex justify-between font-bold">
            <h4>Funding available</h4>
            <h4>{formatCurrency(data.available)}B</h4>
          </div>

          <ul className="space-y-1">
            {data.drivers
              .sort((a, b) => b.cost - a.cost)
              .map((d) => {
                const DRIVER = DRIVERS.find((dd) => dd.id === d.source);
                return (
                  <li key={d.id} className="flex w-full items-center space-x-5 text-sm">
                    <div className="flex items-center space-x-2">
                      <div
                        className="h-6 w-2"
                        style={{
                          backgroundColor: DRIVER?.color,
                        }}
                      />

                      <h4>{DRIVER?.name}</h4>
                    </div>

                    <div className="grow text-right">
                      {formatPercentage(d.cost / data.available)}
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
