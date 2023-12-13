"use client";

import Global from "@/containers/global";
import Wrapper from "@/containers/wrapper";

const Faqs = (): JSX.Element => {
  return (
    <>
      <Wrapper>
        <h4 className="pb-12 pt-36 font-space-grotesk text-3xl text-white">
          Frequently asked questions
        </h4>
      </Wrapper>

      <Global />
    </>
  );
};

export default Faqs;
