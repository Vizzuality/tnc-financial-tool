"use client";

import TreemapChart from "@/containers/charts/treemap";

const Home = (): JSX.Element => {
  return (
    <div className="h-screen w-full">
      <TreemapChart width={200} height={200} />
    </div>
  );
};

export default Home;
