"use client";

import dynamic from "next/dynamic";

import { scaleLinear } from "@visx/scale";

import { Country } from "@/types/country";

import { LABEL_MARGIN } from "@/constants/charts";

import ChartGap from "@/containers/home/chart/gap";
import ChartOpportunities from "@/containers/home/chart/opportunities";
import ChartProvider from "@/containers/home/chart/provider";
import DriversTooltip from "@/containers/home/chart/tooltips/drivers";
import NeedsTooltip from "@/containers/home/chart/tooltips/needs";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const ChartDrivers = dynamic(() => import("@/containers/home/chart/drivers"), {
  ssr: false,
});
const ChartLabel = dynamic(() => import("@/containers/home/chart/label"), {
  ssr: false,
});

export type ChartProps = {
  data: Country;
  index: number;
  mode: "drivers" | "gap" | "opportunities";
  unit: "absolute" | "relative";
  width: number;
  height: number;
  absoluteGlobalScale: ReturnType<typeof scaleLinear<number>>;
  relativeGlobalScale: ReturnType<typeof scaleLinear<number>>;
};

export default function Chart({
  data,
  index,
  unit,
  mode,
  width: parentWidth,
  height: parentHeight,
  absoluteGlobalScale,
  relativeGlobalScale,
}: ChartProps) {
  // const [tooltip, setTooltip] = useState(false);
  // Absolute
  const maxAbsolute =
    absoluteGlobalScale(data.available + data.needed) * parentWidth - LABEL_MARGIN;
  const absoluteScale = scaleLinear<number>({
    domain: [0, 1],
    range: [0, maxAbsolute > 0 ? maxAbsolute : 10],
  });

  // Relative
  const maxRelative =
    relativeGlobalScale(data.available_by_GDP + data.needed_by_GDP) * parentWidth - LABEL_MARGIN;
  const relativeScale = scaleLinear<number>({
    domain: [0, 1],
    range: [0, maxRelative > 0 ? maxRelative : 10],
  });

  const max = unit === "absolute" ? maxAbsolute : maxRelative;

  return (
    <Tooltip delayDuration={500}>
      <TooltipTrigger asChild>
        <div className="relative flex w-full">
          <ChartProvider
            data={data}
            index={index}
            mode={mode}
            unit={unit}
            width={parentWidth}
            height={parentHeight}
            absoluteScale={absoluteScale}
            relativeScale={relativeScale}
          >
            <ChartLabel />

            <ChartDrivers />

            <ChartGap />

            <ChartOpportunities />
          </ChartProvider>
        </div>
      </TooltipTrigger>

      {mode !== "opportunities" && (
        <TooltipContent
          className="w-full min-w-[380px] p-8"
          {...(mode === "drivers" && {
            side: "top",
            sideOffset: -parentHeight,
          })}
          {...(mode === "gap" && {
            side: "right",
            align: "start",
            avoidCollisions: false,
            sideOffset:
              parentWidth - max - LABEL_MARGIN - 20 > 380
                ? -(parentWidth - max - LABEL_MARGIN - 20)
                : -380,
          })}
        >
          {mode === "drivers" && <DriversTooltip data={data} />}
          {mode === "gap" && <NeedsTooltip data={data} />}
        </TooltipContent>
      )}
    </Tooltip>
  );
}
