"use client";

import Content from "@/containers/home/content";
import Needs from "@/containers/home/content/needs";
import Hero from "@/containers/home/hero";
import Outro from "@/containers/home/outro";
import { Media } from "@/containers/media";

const Home = (): JSX.Element => {
  return (
    <>
      <Hero />
      <Media greaterThanOrEqual="lg">
        <Content />
      </Media>

      <Media lessThan="lg">
        <Needs />
      </Media>
      <Outro />
    </>
  );
};

export default Home;
