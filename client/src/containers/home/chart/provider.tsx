import React, { PropsWithChildren, createContext, useContext } from "react";

import { scaleLinear } from "@visx/scale";

import { Country } from "@/types/country";

interface ChartProviderProps extends PropsWithChildren {
  data: Country;
  index: number;
  mode: string;
  unit: "absolute" | "relative";
  width: number;
  height: number;
  absoluteScale: ReturnType<typeof scaleLinear<number>>;
  relativeScale: ReturnType<typeof scaleLinear<number>>;
}

const ChartContext = createContext<ChartProviderProps>({
  data: {} as Country,
  index: 0,
  mode: "",
  unit: "absolute",
  width: 0,
  height: 0,
  absoluteScale: scaleLinear<number>({
    domain: [0, 1],
    range: [0, 1],
  }),
  relativeScale: scaleLinear<number>({
    domain: [0, 1],
    range: [0, 1],
  }),
});

export const useChartContext = () => useContext(ChartContext);

const ChartProvider: React.FC<ChartProviderProps> = ({
  data,
  index,
  mode,
  unit,
  width,
  height,
  absoluteScale,
  relativeScale,
  children,
}) => {
  return (
    <ChartContext.Provider
      value={{ data, index, mode, unit, width, height, absoluteScale, relativeScale }}
    >
      {children}
    </ChartContext.Provider>
  );
};

export default ChartProvider;
