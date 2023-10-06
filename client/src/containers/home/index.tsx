"use client";

import { useState } from "react";

import { ParentSize } from "@visx/responsive";

import TreemapChart from "@/containers/charts/treemap";

import { Button } from "@/components/ui/button";

const Home = (): JSX.Element => {
  const [mode, setMode] = useState<"tree" | "bar">("tree");

  return (
    <div className="container h-screen w-full">
      <div className="space-y-5 p-5">
        <div className="flex w-full">
          <ParentSize>
            {({ width, height }) => (
              <TreemapChart mode={mode} percentage={0.02} width={width} height={height} />
            )}
          </ParentSize>
        </div>

        <Button
          onClick={() => {
            setMode(mode === "tree" ? "bar" : "tree");
          }}
        >
          Toogle {mode === "tree" ? "Bar" : "Tree"}
        </Button>
      </div>
    </div>
  );
};

export default Home;
