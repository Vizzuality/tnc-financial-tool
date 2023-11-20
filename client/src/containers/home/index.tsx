"use client";

import Content from "@/containers/home/content";
import Hero from "@/containers/home/hero";
import Outro from "@/containers/home/outro";

const Home = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Content />
      <Outro />
    </>
  );
};

export default Home;
