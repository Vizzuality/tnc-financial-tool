import { scaleLinear } from "@visx/scale";

import { Country } from "@/types/country";

import { LABEL_MARGIN } from "@/constants/charts";

import ChartDrivers from "@/containers/home/chart/drivers";
import ChartGap from "@/containers/home/chart/gap";
import ChartLabel from "@/containers/home/chart/label";
import ChartProvider from "@/containers/home/chart/provider";

export type ChartProps = {
  data: Country;
  index: number;
  mode: "drivers" | "gap" | "opportunities";
  width: number;
  height: number;
  absoluteWidthScale: ReturnType<typeof scaleLinear<number>>;
};

export default function Chart({
  data,
  index,
  mode,
  width: parentWidth,
  height: parentHeight,
  absoluteWidthScale,
}: ChartProps) {
  const max = absoluteWidthScale(data.available + data.needed) * parentWidth - LABEL_MARGIN;
  const widthScale = scaleLinear<number>({
    domain: [0, 1],
    range: [0, max > 0 ? max : 10],
  });

  return (
    <div className="relative flex w-full">
      <ChartProvider
        data={data}
        index={index}
        mode={mode}
        width={parentWidth}
        height={parentHeight}
        widthScale={widthScale}
      >
        <ChartLabel />

        <ChartDrivers />

        <ChartGap />
      </ChartProvider>
    </div>
  );
}
