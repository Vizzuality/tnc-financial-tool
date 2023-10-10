import React, { useMemo } from "react";

import { Group } from "@visx/group";
import { Treemap, hierarchy, stratify, treemapSquarify, treemapSlice } from "@visx/hierarchy";
import { scaleLinear, scaleOrdinal } from "@visx/scale";
import { motion } from "framer-motion";

import { Country } from "@/types/country";

import { BACKGROUND, DRIVERS_COLORS, LABEL_MARGIN } from "@/constants/charts";

type DataProps = { id: string; size: number; parent: string | null };

const colorScale = scaleOrdinal<string, string>({
  domain: DRIVERS_COLORS.map((d) => d.id),
  range: DRIVERS_COLORS.map((d) => d.color),
});

const defaultMargin = { top: 0, left: 0, right: 0, bottom: 0 };

export type ChartProps = {
  data: Country;
  mode: "tree" | "bar";
  percentage: number;
  width: number;
  height: number;
  delay: number;
};

export default function Chart({
  data,
  mode,
  percentage,
  width: parentWidth,
  height: parentHeight,
  delay,
}: ChartProps) {
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

  const widthScale = scaleLinear<number>({
    domain: [0, 1],
    range: [0, parentWidth - LABEL_MARGIN ?? 200],
  });

  const width = useMemo(() => {
    return mode === "bar" ? widthScale(percentage) : 200;
  }, [mode, percentage, widthScale]);

  const gapWidth = widthScale(1 - percentage);
  const height = mode === "bar" ? 50 : 200;

  const margin = defaultMargin;
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  const root = hierarchy(DATA).sort((a, b) => (b.value || 0) - (a.value || 0));
  const transition = {
    duration: 0.5,
  };

  return (
    <div className="relative flex w-full">
      <motion.div
        className="absolute left-0 top-0 flex items-center justify-center"
        animate={{
          x: mode === "tree" ? width / 2 : LABEL_MARGIN - 10,
          y: mode === "tree" ? height : height / 2,
        }}
        transition={transition}
      >
        <motion.h2
          animate={{
            x: mode === "tree" ? "-50%" : "-100%",
            y: mode === "tree" ? 5 : "-50%",
          }}
          transition={transition}
        >
          {data.name}
        </motion.h2>
      </motion.div>

      <motion.svg
        animate={{
          x: mode === "tree" ? 0 : LABEL_MARGIN,
          width,
          height,
        }}
        width={width}
        height={height}
        transition={transition}
      >
        {!!parentWidth && !!parentHeight && (
          <Treemap<typeof DATA>
            top={margin.top}
            root={root}
            size={[xMax, yMax]}
            tile={mode == "bar" ? treemapSlice : treemapSquarify}
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
                              strokeWidth: mode === "bar" ? 0 : 3,
                            }}
                            animate={{
                              x: node.x0 + margin.left,
                              y: node.y0 + margin.top,
                              width: nodeWidth,
                              height: nodeHeight,
                              strokeWidth: mode === "bar" ? 0 : 3,
                            }}
                            transition={transition}
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
      </motion.svg>

      <motion.div
        className="w-full border-white bg-red-500"
        initial={{
          width: 0,
          x: LABEL_MARGIN,
        }}
        animate={{
          width: mode === "bar" ? gapWidth : "0%",
          x: LABEL_MARGIN,
        }}
        transition={{
          duration: mode === "bar" ? 0.5 : 0,
          delay: mode === "bar" ? delay + 0.5 : 0,
        }}
      />
    </div>
  );
}
