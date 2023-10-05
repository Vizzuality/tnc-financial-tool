import React from "react";

import { Group } from "@visx/group";
import { Treemap, hierarchy, stratify, treemapSquarify } from "@visx/hierarchy";
import { scaleOrdinal } from "@visx/scale";

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

const defaultMargin = { top: 10, left: 10, right: 10, bottom: 10 };

export type TreemapProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};

export default function TreemapChart({ width, height, margin = defaultMargin }: TreemapProps) {
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;
  const root = hierarchy(data).sort((a, b) => (b.value || 0) - (a.value || 0));

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <Treemap<typeof data>
        top={margin.top}
        root={root}
        size={[xMax, yMax]}
        tile={treemapSquarify}
        round
      >
        {(treemap) => (
          <Group>
            {treemap
              .descendants()
              .reverse()
              .map((node, i) => {
                const nodeWidth = node.x1 - node.x0;
                const nodeHeight = node.y1 - node.y0;
                const nodeColor = colorScale2(node.data.data.id);

                return (
                  <Group key={`node-${i}`} top={node.y0 + margin.top} left={node.x0 + margin.left}>
                    {node.depth === 1 && (
                      <rect
                        width={nodeWidth}
                        height={nodeHeight}
                        fill={nodeColor}
                        stroke={background}
                        strokeWidth={3}
                      />
                    )}
                  </Group>
                );
              })}
          </Group>
        )}
      </Treemap>
    </svg>
  );
}
