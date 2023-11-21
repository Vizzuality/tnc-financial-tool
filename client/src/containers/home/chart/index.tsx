import { scaleLinear } from "@visx/scale";

import { Country } from "@/types/country";

import { LABEL_MARGIN } from "@/constants/charts";

import ChartDrivers from "@/containers/home/chart/drivers";
import ChartGap from "@/containers/home/chart/gap";
import ChartLabel from "@/containers/home/chart/label";
import ChartOpportunities from "@/containers/home/chart/opportunities";
import ChartProvider from "@/containers/home/chart/provider";

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
  // Absolute
  const maxAbsolute =
    absoluteGlobalScale(data.available_max + data.needed) * parentWidth - LABEL_MARGIN;
  const absoluteScale = scaleLinear<number>({
    domain: [0, 1],
    range: [0, maxAbsolute > 0 ? maxAbsolute : 10],
  });

  // Relative
  const maxRelative =
    relativeGlobalScale(data.available_by_GDP_max + data.needed_by_GDP) * parentWidth -
    LABEL_MARGIN;
  const relativeScale = scaleLinear<number>({
    domain: [0, 1],
    range: [0, maxRelative > 0 ? maxRelative : 10],
  });

  return (
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
  );
}
