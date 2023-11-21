"use client";

import Content from "@/containers/home/content";
import Drivers from "@/containers/home/content/drivers";
import Needs from "@/containers/home/content/needs";
import Opportunities from "@/containers/home/content/opportunities";
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
        <Drivers />
        <Needs />
        <Opportunities />
      </Media>
      <Outro />
    </>
  );
};

export default Home;
