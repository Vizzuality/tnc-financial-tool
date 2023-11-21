"use client";

import { useMemo } from "react";

import { Group } from "@visx/group";
import { Treemap, hierarchy, stratify, treemapDice } from "@visx/hierarchy";
import { scaleOrdinal } from "@visx/scale";
import { motion } from "framer-motion";

import { Country } from "@/types/country";

import { BACKGROUND, DRIVERS_COLORS } from "@/constants/charts";

type DataProps = { id: string; size: number; parent: string | null };

const colorScale = scaleOrdinal<string, string>({
  domain: DRIVERS_COLORS.map((d) => d.id),
  range: DRIVERS_COLORS.map((d) => d.color),
});

const defaultMargin = { top: 0, left: 0, right: 0, bottom: 0 };

interface ChartNeedsProps {
  width: number;
  height: number;
  data: Country;
}

export default function ChartNeeds({
  width: parentWidth,
  height: parentHeight,
  data,
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
            size: data.available * d.cost,
            parent: "treemap",
          }) as DataProps,
      ),
    ];

    return stratify<DataProps>()
      .id((d) => d.id)
      .parentId((d) => d.parent)(D)
      .sum((d) => d.size ?? 0);
  }, [data]);

  // Size
  const width = parentWidth;
  const height = 20;
  const margin = defaultMargin;
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // Treemap
  const root = hierarchy(DATA).sort((a, b) => (b.value || 0) - (a.value || 0));

  return (
    <div>
      <svg width={parentWidth} height={height} className="relative z-10">
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
    </div>
  );
}
