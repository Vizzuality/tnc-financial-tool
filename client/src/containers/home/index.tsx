"use client";

import Content from "@/containers/home/content";
import Hero from "@/containers/home/hero";
import Outro from "@/containers/home/outro";
import { Media } from "@/containers/media";

const Home = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Media greaterThan="lg">
        <Content />
      </Media>
      <Outro />
    </>
  );
};

export default Home;
