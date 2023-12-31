"use client";

import { useMemo } from "react";

import { Group } from "@visx/group";
import { Treemap, hierarchy, stratify, treemapDice } from "@visx/hierarchy";
import { scaleLinear, scaleOrdinal } from "@visx/scale";
import { motion } from "framer-motion";

import { Country } from "@/types/country";

import { BACKGROUND, DRIVERS_COLORS } from "@/constants/charts";

import NeedsTooltip from "@/containers/home/chart/tooltips/needs";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type DataProps = { id: string; size: number; parent: string | null };

const colorScale = scaleOrdinal<string, string>({
  domain: [...DRIVERS_COLORS.map((d) => d.id), "gap"],
  range: [...DRIVERS_COLORS.map((d) => d.color), "#E23248"],
});

const defaultMargin = { top: 0, left: 0, right: 0, bottom: 0 };

interface ChartNeedsProps {
  width: number;
  height: number;
  data: Country;
  unit: "absolute" | "relative";
  absoluteScale: ReturnType<typeof scaleLinear<number>>;
  relativeScale: ReturnType<typeof scaleLinear<number>>;
}

export default function ChartNeeds({
  width: parentWidth,
  height: parentHeight,
  data,
  unit,
  absoluteScale,
  relativeScale,
}: ChartNeedsProps) {
  // Data
  const DATA = useMemo(() => {
    const D = [
      {
        id: "treemap",
        size: 0,
        parent: null,
      },
      ...data.drivers.map(
        (d) =>
          ({
            id: d.source,
            size: data.available * (d.cost / data.available),
            parent: "treemap",
          }) as DataProps,
      ),
      {
        id: "gap",
        size: data.needed,
        parent: "treemap",
      },
    ];

    return stratify<DataProps>()
      .id((d) => d.id)
      .parentId((d) => d.parent)(D)
      .sum((d) => d.size ?? 0);
  }, [data]);

  const v =
    unit === "absolute" ? data.needed + data.available : data.available_by_GDP + data.needed_by_GDP;
  const widthScale = unit !== "absolute" ? relativeScale : absoluteScale;

  // Size
  const width = parentWidth * widthScale(v);
  const height = 20;
  const margin = defaultMargin;
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // Treemap
  const root = hierarchy(DATA).sort((a, b) => (b.value || 0) - (a.value || 0));

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <svg width={width} height={height} className="relative z-10">
            {!!parentWidth && !!parentHeight && (
              <Treemap<typeof DATA>
                top={margin.top}
                root={root}
                size={[xMax, yMax]}
                tile={treemapDice}
                round
              >
                {(treemap) => (
                  <Group>
                    {treemap
                      .sort((a, b) => {
                        if (a.data.data.id === "gap") return 1;
                        if (b.data.data.id === "gap") return -1;
                        return (
                          DRIVERS_COLORS.findIndex((c) => a.data.data.id === c.id) -
                          DRIVERS_COLORS.findIndex((c) => b.data.data.id === c.id)
                        );
                      })
                      .descendants()
                      .reverse()
                      .map((node) => {
                        const nodeWidth = node.x1 - node.x0;
                        const nodeHeight = node.y1 - node.y0;
                        const nodeColor = colorScale(node.data.data.id);

                        return (
                          <Group key={`node-${node.data.data.id}`}>
                            {node.depth === 1 && (
                              <motion.rect
                                initial={{
                                  x: node.x0 + margin.left,
                                  y: node.y0 + margin.top,
                                  width: nodeWidth,
                                  height: nodeHeight,
                                  strokeWidth: 1,
                                }}
                                animate={{
                                  x: node.x0 + margin.left,
                                  y: node.y0 + margin.top,
                                  width: nodeWidth,
                                  height: nodeHeight,
                                  strokeWidth: 1,
                                }}
                                transition={{
                                  duration: 0,
                                }}
                                fill={nodeColor}
                                stroke={BACKGROUND}
                              />
                            )}
                          </Group>
                        );
                      })}
                  </Group>
                )}
              </Treemap>
            )}
          </svg>
        </SheetTrigger>

        <SheetContent side="bottom">
          <NeedsTooltip data={data} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
