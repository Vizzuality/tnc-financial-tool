import { scaleLinear } from "@visx/scale";

import { Country } from "@/types/country";

import { LABEL_MARGIN } from "@/constants/charts";

import ChartDrivers from "@/containers/home/chart/drivers";
import ChartGap from "@/containers/home/chart/gap";
import ChartLabel from "@/containers/home/chart/label";

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
  const widthScale = scaleLinear<number>({
    domain: [0, 1],
    range: [
      0,
      absoluteWidthScale(data.available + data.needed) * parentWidth - LABEL_MARGIN ?? 200,
    ],
  });

  return (
    <div className="relative flex w-full">
      <ChartLabel
        data={data}
        index={index}
        mode={mode}
        parentWidth={parentWidth}
        parentHeight={parentHeight}
        widthScale={widthScale}
      />

      <ChartDrivers
        index={index}
        data={data}
        mode={mode}
        parentWidth={parentWidth}
        parentHeight={parentHeight}
        widthScale={widthScale}
      />

      <ChartGap
        index={index}
        data={data}
        mode={mode}
        parentWidth={parentWidth}
        parentHeight={parentHeight}
        widthScale={widthScale}
      />
    </div>
  );
}
