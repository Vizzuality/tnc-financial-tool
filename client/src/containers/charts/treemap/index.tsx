import React, { useMemo } from "react";

import { Group } from "@visx/group";
import { Treemap, hierarchy, stratify, treemapSquarify, treemapSlice } from "@visx/hierarchy";
import { scaleLinear, scaleOrdinal } from "@visx/scale";
import { motion } from "framer-motion";

export const background = "#FFF";

export const COLORS = [
  {
    id: "treemap",
    color: background,
  },
  {
    id: "private",
    color: "#FFD54F",
  },
  {
    id: "public",
    color: "#FFA96A",
  },
  {
    id: "philantropy",
    color: "#62B5F6",
  },
  {
    id: "international-aid",
    color: "#7886CB",
  },
  {
    id: "environmental",
    color: "#81C784",
  },
];

type DataProps = { id: string; size: number; parent: string | null };

const DATA = [
  {
    id: "treemap",
    parent: null,
    size: 0,
  },
  {
    id: "private",
    parent: "treemap",
    size: 500,
  },
  {
    id: "public",
    parent: "treemap",
    size: 200,
  },
  {
    id: "philantropy",
    parent: "treemap",
    size: 100,
  },
  {
    id: "international-aid",
    parent: "treemap",
    size: 50,
  },
  {
    id: "environmental",
    parent: "treemap",
    size: 150,
  },
] satisfies DataProps[];

const colorScale2 = scaleOrdinal<string, string>({
  domain: COLORS.map((d) => d.id),
  range: COLORS.map((d) => d.color),
});

const data = stratify<DataProps>()
  .id((d) => d.id)
  .parentId((d) => d.parent)(DATA)
  .sum((d) => d.size ?? 0);

const defaultMargin = { top: 0, left: 0, right: 0, bottom: 0 };

export type TreemapProps = {
  mode: "tree" | "bar";
  percentage: number;
  width: number;
  height: number;
  delay: number;
};

export default function TreemapChart({
  mode,
  percentage,
  width: parentWidth,
  height: parentHeight,
  delay,
}: TreemapProps) {
  const widthScale = scaleLinear<number>({
    domain: [0, 1],
    range: [0, parentWidth ?? 200],
  });

  const width = useMemo(() => {
    return mode === "bar" ? widthScale(percentage) : 200;
  }, [mode, percentage, widthScale]);

  const gapWidth = widthScale(1 - percentage);
  const height = mode === "bar" ? 50 : 200;

  const margin = defaultMargin;
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  const root = hierarchy(data).sort((a, b) => (b.value || 0) - (a.value || 0));
  const transition = {
    duration: 0.5,
  };

  return (
    <div
      className="flex w-full"
      style={{
        height,
      }}
    >
      <motion.svg
        animate={{
          width,
          height,
        }}
        width={width}
        height={height}
        transition={transition}
      >
        {!!parentWidth && !!parentHeight && (
          <Treemap<typeof data>
            top={margin.top}
            root={root}
            size={[xMax, yMax]}
            tile={mode == "bar" ? treemapSlice : treemapSquarify}
            round
          >
            {(treemap) => (
              <Group>
                {treemap
                  .descendants()
                  .reverse()
                  .map((node) => {
                    const nodeWidth = node.x1 - node.x0;
                    const nodeHeight = node.y1 - node.y0;
                    const nodeColor = colorScale2(node.data.data.id);

                    return (
                      <Group key={`node-${node.data.data.id}`}>
                        {node.depth === 1 && (
                          <motion.rect
                            initial={{
                              x: node.x0 + margin.left,
                              y: node.y0 + margin.top,
                              width: nodeWidth,
                              height: nodeHeight,
                              strokeWidth: mode === "bar" ? 1 : 3,
                            }}
                            animate={{
                              x: node.x0 + margin.left,
                              y: node.y0 + margin.top,
                              width: nodeWidth,
                              height: nodeHeight,
                              strokeWidth: mode === "bar" ? 1 : 3,
                            }}
                            transition={transition}
                            fill={nodeColor}
                            stroke={background}
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
        className="w-full border-white bg-black"
        initial={{
          width: 0,
        }}
        animate={{
          width: mode === "bar" ? gapWidth : "0%",
        }}
        transition={{
          duration: mode === "bar" ? 0.5 : 0,
          delay: mode === "bar" ? delay + 0.5 : 0,
        }}
      />
    </div>
  );
}
