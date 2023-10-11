import React, { PropsWithChildren, createContext, useContext } from "react";

import { scaleLinear } from "@visx/scale";

import { Country } from "@/types/country";

interface ChartProviderProps extends PropsWithChildren {
  data: Country;
  index: number;
  mode: string;
  width: number;
  height: number;
  widthScale: ReturnType<typeof scaleLinear<number>>;
}

const ChartContext = createContext<ChartProviderProps>({
  data: {} as Country,
  index: 0,
  mode: "",
  width: 0,
  height: 0,
  widthScale: scaleLinear<number>({
    domain: [0, 1],
    range: [0, 1],
  }),
});

export const useChartContext = () => useContext(ChartContext);

const ChartProvider: React.FC<ChartProviderProps> = ({
  data,
  index,
  mode,
  width,
  height,
  widthScale,
  children,
}) => {
  return (
    <ChartContext.Provider value={{ data, index, mode, width, height, widthScale }}>
      {children}
    </ChartContext.Provider>
  );
};

export default ChartProvider;
